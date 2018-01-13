import React, { Component} from 'react';
let imageUrl = 'https://image.tmdb.org/t/p/w300/';

const MovieCard = (props) => {
    return (
        <div className="mainDiv">
            <div className="img">
                <img src={`${imageUrl}${props.data.poster_path}`} />
            </div>
            <div className="description">
                <div className="title">
                    <p><strong>{props.data.title || props.data.name}</strong></p>
                    <span >vote {props.data.vote_average}</span>
                </div>
                <p className="movieDescription">
                        {props.data.overview}
                </p>
                <div className="moreInfo">
                      More Info
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
