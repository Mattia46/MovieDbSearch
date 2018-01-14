import React, { Component } from 'react';
import option from './../Utils/utils.js';
import {
    apiFactoryList,
    apiFactorySearch
} from './../Service/api.js';
import MovieCard from './../MovieCard/MovieCard.js';
import { MovieButton, SelectMovieButton } from './../Button/Button.js';
import MoviePage from './../MoviePage/MoviePage.js';


export default class Main extends Component {
    initialState = {
        movies: [],
        listMovie: [],
        selectedMovie: '',
    }
    state = this.initialState;

    resetState = () =>
        this.setState(this.initialState);

    getMovies = (type) =>
        apiFactoryList(type)
            .then(data => {
                this.resetState();
                this.setState({ movies: data.results });
            });

    searchMovie = (e) =>
        apiFactorySearch(e.target.value)
            .then(data => data.results.filter(x => x.title))
            .then(data => {
                this.resetState();
                this.setState({ listMovie: data });
            });

    getSelectedMovie = (movie) => {
        this.resetState();
        this.setState({selectedMovie: movie});
    }

    showSelectedMovie = () => {
        if(this.state.selectedMovie) {
            return <MoviePage movie={this.state.selectedMovie} />;
        }
    }

    render() {
        const movies = this.state.movies.map(
            x =>
                <MovieCard
                    key={x.id}
                    data={x}
                    getSelectedMovie={this.getSelectedMovie}
            />
        );
        const links = option.map(
            x => <MovieButton
                    onClick={this.getMovies}
                    key={x.link}
                    movie={x}
                />
        );
        const listMovieSearched = this.state.listMovie.map(
            x => <SelectMovieButton
                onClick={this.getSelectedMovie}
                movie={x}
                key={x.id}
            />
        );

            return (
            <div>
                <div className="container">
                    <h1> The Movie DB </h1>
                    <div>
                        {links}
                    </div>
                </div>
                <form onChange={this.searchMovie} className="container">
                    <label>
                    Search for:
                        <input type="text" name="movieInput"/>
                    </label>
                    {listMovieSearched}
                </form>
                <div>
                    {this.showSelectedMovie()}
                </div>
                <div className="main">
                    {movies}
                </div>
            </div>
        );
    }
}
