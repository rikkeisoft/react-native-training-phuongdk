import React from 'react';
import { Button, Text, View, TextInput, FlatList, Image } from 'react-native';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('SearchStore')
@observer class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text:''
      };
    }

    componentDidMount() {
      this.props.SearchStore.getMovies();
    }

    render() {
      return (
        <View style={{flex: 1, padding:10}}>
          <TextInput placeholder="Search by movie name..." onChangeText={(text) => this.setState({text})} />
          {this.props.SearchStore.movies && (
          <FlatList
            data={this.props.SearchStore.movies}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({ item }) => (
              <View style={{borderWidth: 0.5, padding: 10, justifyContent: 'center', alignItems: 'center'}}>
              <View>
                <Image source={{uri: item.Poster}} style={{width: 193, height: 110}} />
              </View>
              <Text>{item.Title}</Text>
              <Text>{item.Year}</Text>
              <Text>{item.Type}</Text>
              </View>
            )}
          />
        )}
          <Button
          title="Go to Details"
          onPress={() => this.props.SearchStore.getMovies()}
        />
        
        </View>
      );
    }
}
export default Search
