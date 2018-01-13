import React, { Component } from 'react';
import './Main.css';
import option from './../Utils/utils.js';
import {
    apiFactoryList,
    apiFactorySearch
} from './../Service/api.js';
import MovieCard from './../MovieCard/MovieCard.js';
import MovieButton from './../Button/Button.js';


export default class Main extends Component {
    state = {
        movie: []
    };

    getMovie = (type) =>
        apiFactoryList(type)
            .then(data => this.setState({
                movie: data.results
        }));

    render() {
        const movie = this.state.movie.map(
            x =>
                <MovieCard
                    key={x.id}
                    data={x}
            />
        );
        const links = option.map(
            x =>
                <MovieButton
                    onClick={this.getMovie}
                    key={x.link}
                    movie={x}
                />
        );
        return (
            <div>
                <div className="container">
                    <h1> The Movie DB </h1>
                    <div className="container">
                        {links}
                    </div>
                </div>
                <div className="main">
                    {movie}
                </div>
            </div>
        );
    }
}
