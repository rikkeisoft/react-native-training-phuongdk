import config from '../libs/config';
import { observable, action, computed } from 'mobx';
import app from '../libs/fetch';
import { types } from 'mobx-state-tree';
import axios from 'axios';

//MOBX STATE-TREE-CODE
// const Movie = types.model('Movie', {
//     title: types.optional(types.string, ''),
//     type: types.optional(types.string, ''),
//     year: types.optional(types.string, ''),
//     Poster: types.optional(types.string, '')
// });

// const Movies = types.model('Movies', {
//     movies: types.array(Movie),
//     message: types.optional(types.string, ''),
//     totalPerPage: types.optional(types.string, ''),
//     totalResults: types.optional(types.string, '')
// })
// .views(self => ({
//     getMovies() {
//         app.fetchMovies(config.defaultMovies)
//         .then(results => {
//             self.movies = results.data.Search;
//             self.message =  results.data.Response;
//             self.totalPerPage = results.data.Search.length;
//             self.totalResults = results.data.totalResults;
//         })
//         .catch(error => {
//             self.movies = [];
//             self.message =  error;
//             self.totalPerPage = '';
//             self.totalResults = '';
//         })
//     },
// }))
// .actions(self => {
//     function getMovies() {
//         app.fetchMovies(config.defaultMovies)
//         .then(results => self.fetchProjectsSuccess(results))
//         .catch(error => self.fetchProjectsError(error))
//         .then(results => {
//             self.movies = results.data.Search;
//             self.message =  results.data.Response;
//             self.totalPerPage = results.data.Search.length;
//             self.totalResults = results.data.totalResults;
//         })
//         .catch(error => {
//             throw error;
//             self.movies = [];
//             self.message =  error;
//             self.totalPerPage = '';
//             self.totalResults = '';
//         })
//     window.fetch('https://www.omdbapi.com/?s=The+K&apikey=5f404258')
//     .then(results => { return results.json() })
//     .then(fetchProjectsSuccess)
//     .catch(fetchProjectsError)
//     }
//     function fetchProjectsSuccess(results) {
//         results = JSON.stringify(results);
//         window.alert(results);
//         self.movies = results.data.Search;
//         self.message =  results.data.Response;
//         self.totalPerPage = results.data.Search.length;
//         self.totalResults = results.data.totalResults;
//     }

//     function fetchProjectsError(error) {
//         window.alert("Failed to fetch projects", error)
//         throw error
//         self.movies = [];
//         self.message =  error;
//         self.totalPerPage = '';
//         self.totalResults = '';
//     }
//         return { getMovies }
// });
// const searchStore = Movies.create({
//     movies: [],
//     message: '',
//     totalPerPage: '',
//     totalResults: ''
//     });

//MOBX CODE
class searchStore {
    @observable movies = [];
    @observable message = null;
    @observable totalPerPage = null;
    @observable totalResults = null;

    @action getMovies() {
        app.fetchMovies(config.defaultMovies)
        .then(results => {
            this.movies = results.data.Search;
            this.message =  results.data.Response;
            this.totalPerPage = results.data.Search.length;
            this.totalResults = results.data.totalResults;
        })
        .catch(error => {
            this.movies = [];
            this.message =  error;
            this.totalPerPage = null;
            this.totalResults = null;
        })
    }
}
export default searchStore
