import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getMovieRequest, resetResponse } from "../actions/movieActions";

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        movie: state.movie
    }
};
const mapDispatchToProps = (dispatch) => ({
    onGetYotubeData: ({youtubeUrl, sharedBy}) => {
        dispatch(getMovieRequest(youtubeUrl, sharedBy));
    },
    onResetResponse: () => {
        dispatch(resetResponse());
    }
});

function ShareMoivePage(props) {
    const { username } = props.auth;
    const { response } = props.movie;
    const [validated, setValidated] = useState(false);
    const [ isError, setError] = useState(false);
    const [url, setUrl] = useState('');

    const navigate = useNavigate();
    React.useEffect(() => {
        if (response === 'success') {
            props.onResetResponse();
            navigate('/');
        }
    });

    const onSubmit = (event) => {
        const form = event.currentTarget;
        form.checkValidity();
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity()) {
            if (url && username) {
                props.onGetYotubeData({youtubeUrl: url, sharedBy: username});
            } else {
                setError(true)
            }
        }
        setValidated(true);
    }
    return (
        <div className="share-page">
            <Card className="shadow-sm" style={{ width: "600px", margin: "auto", padding: "20px" }}>
                <Card.Body>
                    <h4 className="title text-danger">Share a Youtube movie</h4>
                    <Form className="form" noValidate validated={validated} onSubmit={onSubmit}>
                        <div className="form-floating">
                            <input type="text" required className="form-control" value={url} onChange={e => setUrl(e.target.value)} />
                            <label htmlFor="floatingInput">Youtube URL:</label>
                        </div>
                        {isError && <div class="text-danger mt-4">Please login first</div>}
                        <Button variant="primary" className="w-100 mt-4" size="lg" type="submit">Share</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareMoivePage);
