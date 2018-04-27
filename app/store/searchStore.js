import config from '../libs/config';
import { observable } from 'mobx';
import app from '../libs/fetch';
import { types } from 'mobx-state-tree';
import axios from 'axios';
import { flow } from 'mobx-state-tree';

const Movie = types.model('Movie', {
    title: types.optional(types.string, ''),
    type: types.optional(types.string, ''),
    year: types.optional(types.string, ''),
    Poster: types.optional(types.string, '')
});

const Movies = types.model('Movies', {
    movies: types.array(Movie),
    message: types.optional(types.string, ''),
    totalPerPage: types.optional(types.string, ''),
    totalResults: types.optional(types.string, '')
})
.views(self => ({
    getMovies() {
        app.fetchMovies(config.defaultMovies)
        .then(results => {
            self.movies = results.data.Search;
            self.message =  results.data.Response;
            self.totalPerPage = results.data.Search.length;
            self.totalResults = results.data.totalResults;
        })
        .catch(error => {
            self.movies = [];
            self.message =  error;
            self.totalPerPage = '';
            self.totalResults = '';
        })
    },
}))
.actions(self => {
    function getMovies() {
        // app.fetchMovies(config.defaultMovies)
        // .then(results => self.fetchProjectsSuccess(results))
        // .catch(error => self.fetchProjectsError(error))
        // .then(results => {
        //     self.movies = results.data.Search;
        //     self.message =  results.data.Response;
        //     self.totalPerPage = results.data.Search.length;
        //     self.totalResults = results.data.totalResults;
        // })
        // .catch(error => {
        //     throw error;
        //     self.movies = [];
        //     self.message =  error;
        //     self.totalPerPage = '';
        //     self.totalResults = '';
        // })
    window.fetch('https://www.omdbapi.com/?s=The+A&apikey=5f404258')
    .then(results => results.json())
    .then(fetchProjectsSuccess, fetchProjectsError)
    }
    function fetchProjectsSuccess(results) {
        window.alert(JSON.stringify(results));
        self.movies = results.data.Search;
        self.message =  results.data.Response;
        self.totalPerPage = results.data.Search.length;
        self.totalResults = results.data.totalResults;
    }

    function fetchProjectsError(error) {
        window.alert("Failed to fetch projects", error)
        self.movies = [];
        self.message =  error;
        self.totalPerPage = '';
        self.totalResults = '';
    }
        return { getMovies }
});
const searchStore = Movies.create({
    movies: [],
    message: '',
    totalPerPage: '',
    totalResults: ''
    });

// //MOBX CODE
// class searchStore {
//     @observable movies = [];
//     @observable message = '';
//     @observable totalPerPage = '';
//     @observable totalResults = '';

//     getMovies() {
//         app.fetchMovies(config.defaultMovies)
//         .then(results => {
//             console.log(results);
//             this.movies = results.data.Search;
//             this.message =  results.data.Response;
//             this.totalPerPage = results.data.Search.length;
//             this.totalResults = results.data.totalResults;
//         })
//         .catch(error => {
//             this.movies = [];
//             this.message =  error;
//             this.totalPerPage = '';
//             this.totalResults = '';
//         })
//     }
// }

export default searchStore
