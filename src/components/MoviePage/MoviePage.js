import React from 'react';
let imageUrl = 'https://image.tmdb.org/t/p/w300/';

const MoviePage = (props) => {
    return (
        <div className="moviePage">
            <div className="">
                <img src={`${imageUrl}${props.movie.poster_path}`} />
            </div>
            <div className="moviePageRight">
                <div className="title">
                    <p><strong>{props.movie.title || props.movie.name}</strong></p>
                    <span >vote {props.movie.vote_average}</span>
                </div>
                <p className="overview"><strong>Overview: </strong></p>
                <p className="movieDescription">
                    {props.movie.overview}
                </p>
            </div>
        </div>
    );
};


export default MoviePage;
