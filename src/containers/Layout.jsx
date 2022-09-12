import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/AppHeader";
import Container from 'react-bootstrap/Container';

function Layout() {
    return (
        <Container>
            <Header></Header>
            <div className="main-container">
                <Outlet />
            </div>
        </Container>
    );
}

export default Layout;
