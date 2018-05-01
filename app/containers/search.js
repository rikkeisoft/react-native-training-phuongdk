import React from 'react';
import { View, TextInput } from 'react-native';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import Searchcontent from '../screens/search';

@inject('SearchStore')
@observer class Search extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.SearchStore.getMovies();
    }

    render() {
      const {navigation: { navigate }, SearchStore: { movies, message, totalPerPage, totalResults } } = this.props;
      return (
        <View style={{flex: 1, margin: 10, borderWidth: 0.5, backgroundColor: '#ffffff'}}>
          <Searchcontent navigate={navigate} movies={movies || []} message={message} totalPerPage={totalPerPage} totalResults={totalResults} />
        </View>
      );
    }
}
export default Search
