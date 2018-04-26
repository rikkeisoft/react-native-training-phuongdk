import config from '../libs/config';
import { observable } from 'mobx';
import app from '../libs/fetch';
import { types } from 'mobx-state-tree';

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
    get getMovies() {
        return app.fetchMovies(config.defaultMovies)
        .then(results => {
            console.log(results);
            self.movies = results.data.Search;
            window.alert(self.movies)   
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
        app.fetchMovies(config.defaultMovies)
        .then(results => {
            console.log(results);
            self.movies = results.data.Search;
            window.alert(self.movies)   
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
    }
        return { getMovies }
});
const searchStore = Movies.create({movies: []});
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
