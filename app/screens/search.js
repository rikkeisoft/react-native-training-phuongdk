import React, { Component } from 'react'
import { Button, Text, View, TextInput, FlatList, Image } from 'react-native'

class Searchcontent extends Component {
  constructor (props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (value) {
    this.props.onSearchChange(value)
  }

  render () {
    const { movies, message, navigate, search } = this.props
    return (
      <View style={{flex: 1}}>
        <View>
          <TextInput placeholder='Search by movie name...' onChangeText={(value) => this.handleSearch(value)} value={search} />
        </View>
        {
          movies && movies.length > 0
            ? (
              <FlatList
                data={movies}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item }) => (
                  <View style={{flexDirection: 'row', borderBottomWidth: 0.5, padding: 10, marginBottom: 5}}>
                    <View style={{flex: 0.4}}>
                      <Image source={{uri: item.Poster}} style={{width: 120, height: 120}} />
                    </View>
                    <View style={{flex: 0.6, marginLeft: 10}}>
                      <Text>Title: {item.Title}</Text>
                      <Text>Published Date: {item.Year}</Text>
                      <Text>Type: {item.Type}</Text>
                      <Text>ID: {item.imdbID}</Text>
                      <View style={{flex: 0.5}}>
                        <Button
                          title='Read more'
                          onPress={
                            () => {
                              navigate('Detail',
                                {
                                  movieId: item.imdbID || null
                                }
                              )
                            }
                          }
                        />
                      </View>
                    </View>
                  </View>
                )}
              />
            )
            : <View style={{alignItems: 'center'}}><Text>{message}</Text></View>
        }
      </View>
    )
  }
}
export default Searchcontent
