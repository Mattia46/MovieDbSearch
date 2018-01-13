import React from 'react';

const MovieButton = (prop) =>
    <button
        onClick={() => prop.onClick(prop.movie.link)}>
        {prop.movie.type}
    </button>;

export default MovieButton;
