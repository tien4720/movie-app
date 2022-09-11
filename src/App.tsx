import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./containers/LoginPage";
import Layout from "./containers/Layout";
import MoviePage from "./containers/MoviePage";
import ShareMoivePage from "./containers/ShareMoviePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<MoviePage />} />
                    <Route path="share" element={<ShareMoivePage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
