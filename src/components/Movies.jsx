import React from "react";
import Movie from "./movie";

function Movies(props) {
    return (
        <div>
            {props.items.length ? 
                props.items.map((item,index)=>{
                    return <Movie key={index} item={item} />
                })
                :
                <h4>No movies available</h4>
            }
        </div>
    );
}

export default Movies;
