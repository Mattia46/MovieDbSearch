import React from 'react';

export const MovieButton = (prop) =>
    <button
        onClick={() => prop.onClick(prop.movie.link)}>
        {prop.movie.type}
    </button>;

export const SelectMovieButton = (prop) =>
    <h3
        onClick={() => prop.onClick(prop.movie)}>
        {prop.movie.title}
    </h3>;

