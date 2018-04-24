import config from '../libs/config';
import { observable } from 'mobx';
import app from '../libs/fetch';

class searchStore {
    @observable movies = [];
    @observable message = '';
    @observable totalPerPage = '';
    @observable totalResults = '';

    getMovies() {
        app.fetchMovies(config.defaultMovies)
        .then(results => {
            console.log(results);
            this.movies = results.data.Search;
            this.message =  results.data.Response;
            this.totalPerPage = results.data.Search.length;
            this.totalResults = results.data.totalResults;
        })
        .catch(error => {
            this.movies = [];
            this.message =  error;
            this.totalPerPage = '';
            this.totalResults = '';
        })
    }
}
export default searchStore
