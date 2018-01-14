import React from 'react';
let imageUrl = 'https://image.tmdb.org/t/p/w300/';

const MoviePage = (props) => {
    return (
        <div className="">
            <div className="">
                <img src={`${imageUrl}${props.movie.poster_path}`} />
            </div>
            <div className="">
                <div className="title">
                    <p><strong>{props.movie.title || props.movie.name}</strong></p>
                    <span >vote {props.movie.vote_average}</span>
                </div>
                <p className="movieDescription">
                        {props.movie.overview}
                </p>
                <div className="moreInfo">
                      More Info
                </div>
            </div>
        </div>
    );
};


export default MoviePage;
