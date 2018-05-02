import React, {Component} from 'react'
import { Button, Text, View, Image } from 'react-native'

class Detailcontent extends Component {
  constructor (props) {
    super(props)
    this.handleBookMark = this.handleBookMark.bind(this)
  }

  handleBookMark () {
    this.props.onBookMarkChange(this.props.movie.imdbID, this.props.movie.Title)
  }

  render () {
    const { movie, message, bookmark} = this.props
    return (
      <View>
        {
          movie && movie !== null
            ? (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={{uri: movie.Poster}} style={{width: 220, height: 220}} />
                <Text>Title: {movie.Title}</Text>
                <Text>Published Date: {movie.Year}</Text>
                <Text>Genre: {movie.Genre}</Text>
                <Text>Actor: {movie.Actors}</Text>
                <Text>Language: {movie.Language}</Text>
                <Text>Plot: {movie.Plot}</Text>
                <Text>Production: {movie.Production}</Text>
                <Text>Awards: {movie.Awards}</Text>
              </View>
            )
            : <View style={{alignItems: 'center'}}><Text>{message}</Text></View>
        }
        {
          bookmark === true
            ? <Button
              style={{marginTop: 10}}
              onPress={this.handleBookMark}
              title='Bookmarked'
              color='green'
              accessibilityLabel='Bookmark'
            />
            : <Button
              style={{marginTop: 10}}
              onPress={this.handleBookMark}
              title='Bookmark'
              accessibilityLabel='Bookmarked'
            />
        }
      </View>
    )
  }
}
export default Detailcontent
