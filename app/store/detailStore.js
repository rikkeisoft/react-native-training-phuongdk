import config from '../libs/config';
import { observable, action, computed } from 'mobx';
import app from '../libs/fetch';
import { types } from 'mobx-state-tree';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

//MOBX CODE
class detailStore {
    @observable movie = null;
    @observable message = null;
    @observable bookmark = false;

    @action initVal() {
        this.bookmark = false;
    }

    @action getMovie(id) {
        if (id === null) {
            return;
        }
        app.fetchMovies(id, 'i')
        .then(results => {
            this.movie = results.data;
            this.message =  results.data.Response;
        })
        .catch(error => {
            this.movie = null;
            this.message =  error;
        })
    }

    @action async checkBookMark(id) {
        try {
            const value = await AsyncStorage.getItem(id);
            if (value !== null) {
                this.bookmark = true;
            }
          } catch (error) {
            window.alert("Error" + error);
          }
    }

    @action async handleBookMark(id, title) {
        this.bookmark = !this.bookmark;
        if (this.bookmark === true) {
            try {
                await AsyncStorage.setItem(id, title);
              } catch (error) {
                window.alert("Error" + error);
              }
        } else {
            try {
                await AsyncStorage.removeItem(id);
              } catch (error) {
                window.alert("Error" + error);
              }
        }
    }
}
export default detailStore
