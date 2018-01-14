import React from 'react';

export const MovieButton = (prop) =>
    <button className="movieButton"
        onClick={() => prop.onClick(prop.movie.link)}>
        {prop.movie.type}
    </button>;

export const SelectMovieButton = (prop) =>
    <h4 className="movieList"
        onClick={() => prop.onClick(prop.movie)}>
        {prop.movie.title}
    </h4>;

