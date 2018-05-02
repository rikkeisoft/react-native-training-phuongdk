import React from 'react';
import { View, TextInput } from 'react-native';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import Searchcontent from '../screens/search';
import config from '../libs/config';

@inject('SearchStore')
@observer class Search extends React.Component {
    constructor(props) {
      super(props);
      this.timeoutId = null
      this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(value) {
      let keyWord = value
      let newKeyWord = keyWord.trim()
      let keywordLength = newKeyWord.length
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
      }
      if (keywordLength < 3) {
        if (keywordLength === 0) {
          this.timeoutId = setTimeout(() => {
            this.props.SearchStore.getMovies(config.defaultMovies)
          }, 500)
          return
        }
        this.timeoutId = setTimeout(() => {
          this.props.SearchStore.emptyMovies()
        }, 500)
        return
      }
      this.timeoutId = setTimeout(() => {
        this.props.SearchStore.getMovies(newKeyWord)
      }, 500)
      return
    }

    componentDidMount() {
      this.props.SearchStore.getMovies(config.defaultMovies);
    }

    render() {
      const {navigation: { navigate }, SearchStore: { search, movies, message, totalPerPage, totalResults } } = this.props;
      return (
        <View style={{flex: 1, margin: 10, borderWidth: 0.5, backgroundColor: '#ffffff'}}>
          <Searchcontent onSearchChange={this.handleSearch} search={search} navigate={navigate} movies={movies || []} message={message} totalPerPage={totalPerPage} totalResults={totalResults} />
        </View>
      );
    }
}
export default Search
