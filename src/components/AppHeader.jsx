import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { logout } from "../actions/authActions";

const mapStateToProps = (state) => ({auth: state.auth});
const mapDispatchToProps = (dispatch) => ({
    onLogout: () => {
        dispatch(logout());
    },
});
function Header(props) {
    const { username } = props.auth
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src="/movie.png" alt="movie" /> Funny Movies
            </a>
            {( username ?
                <div className="col-md-6 text-end">
                    <span className="me-2">Welcom {username}</span>
                    <Link to="share"><Button variant="outline-primary" className="me-2">Share a movie</Button></Link>
                    <Button variant="primary" type="primary" onClick={props.onLogout}>Logout</Button>
                </div>
                :
                <div className="col-md-3 text-end">
                    <Link to="login"><Button variant="outline-primary" className="me-2">Login</Button></Link>
                    <Link to="register"><Button variant="primary">Sign up</Button></Link>
                </div>
            )}
        </header>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
