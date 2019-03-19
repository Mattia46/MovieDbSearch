import React, { Component } from 'react';
import ExampleBoundary from '../../../sentry';
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
        movies: [{id: 1, title: 'cio'}, {id: 2, title: 'nope'}],
        listMovie: [],
        selectedMovie: '',
    }
    state = this.initialState;

    componentWillMount = () =>
        this.getMovies('movie/top_rated');

    resetState = () =>
        this.setState(this.initialState);

    getMovies = (type) =>
        apiFactoryList(type)
            .then(data => {
                this.resetState();
                this.setState({ movies: data.results });
            })
            .catch(err => err);

    searchMovie = (e) =>
        apiFactorySearch(e.target.value)
            .then(data => data.results.filter(x => x.title))
            .then(data => {
                this.resetState();
                this.setState({ listMovie: data });
            })
            .catch(err => err);

    getSelectedMovie = (movie) => {
        this.resetState();
        this.setState({selectedMovie: movie});
    }

    showSelectedMovie = () => {
        if(this.state.selectedMovie) {
            return <MoviePage movie={this.state.selectedMovie} />;
        }
    }

    test() {
        new Error('ciao Erro Mattia')
        this.state.movies.map(x => x);
    }

    render() {
        new Error('ccccc MAttia');
        console.log('here');
        //const movies = this.state.movies.map(
            //x => <MovieCard
                //key={x.id}
                //data={x}
                //getSelectedMovie={this.getSelectedMovie}
            ///>
            //);
            //
        this.test();
        //const links = option.map(
            //x => <MovieButton
                //onClick={this.getMovies}
                //key={x.link}
                //movie={x}
            ///>
            //);
        //const listMovieSearched = this.state.listMovie.map(
                //x => <SelectMovieButton
                //onClick={this.getSelectedMovie}
                    //movie={x}
                //key={x.id}
            ///>
            /*);*/

            return (
            <ExampleBoundary>
            <div>
                icoa
            </div>
        </ExampleBoundary>
            );
    }
}
