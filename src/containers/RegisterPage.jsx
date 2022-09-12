import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { register, resetResponse } from "../actions/authActions";
import "./Auth.css";

const mapStateToProps = (state) => ({auth: state.auth});
const mapDispatchToProps = (dispatch) => ({
    onRegister: (username, password) => {
        dispatch(register({username, password}));
    },
    onResetResponse: () => {
        dispatch(resetResponse());
    }
});

function RegisterPage(props) {
    const navigate = useNavigate();
    React.useEffect(() => {
        if (props.auth.response === 'success') {
            props.onResetResponse();
            navigate('/');
        }
    });
    
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
            if (username && password) {
                props.onRegister(username, password);
            }
        }
        setValidated(true);
    }
    
    return (
        <div className="auth-page">
            <Form className="form" noValidate validated={validated} onSubmit={onSubmit}>
                <h1 className="h3 mb-3 fw-normal">Sign up</h1>
                <div className="form-floating">
                    <input type="email" required className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mt-4">
                    <input type="password" required className="form-control" onChange={e => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <Button variant="primary" className="w-100 mt-4" size="lg" type="submit">Sign up</Button>
            </Form>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
