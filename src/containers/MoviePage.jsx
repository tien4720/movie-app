import React, { useEffect } from "react";
import { connect } from "react-redux";
import Movies from "../components/MovieList";
import { getMovies } from "../actions/movieActions";

const mapStateToProps = (state) => ({movie: state.movie});
const mapDispatchToProps = (dispatch) => ({
    onGetMovies: () => {
        dispatch(getMovies());
    },
});

function MoviePage(props) {
    const { movies, isCallGetMovies } = props.movie;
    if (!isCallGetMovies) {
        props.onGetMovies();
    }

    return (
        <div className="page movie-page">
            <Movies items={movies} />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
