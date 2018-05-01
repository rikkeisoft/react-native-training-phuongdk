import React, {Component} from 'react';
import { Button, Text, View, FlatList, Image } from 'react-native';

class Detailcontent extends Component {
    constructor (props) {
        super(props)
        this.handleBookMark = this.handleBookMark.bind(this)
    }

    handleBookMark() {
        this.props.onBookMarkChange(this.props.movie.imdbID, this.props.movie.Title)
      }

    render() {
        return (
            <View>
                {
                this.props.movie && this.props.movie !== null ? 
                (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={{uri: this.props.movie.Poster}} style={{width: 220, height: 220}} />
                            <Text>Title: {this.props.movie.Title}</Text>
                            <Text>Published Date: {this.props.movie.Year}</Text>
                            <Text>Genre: {this.props.movie.Genre}</Text>
                            <Text>Actor: {this.props.movie.Actors}</Text>
                            <Text>Language: {this.props.movie.Language}</Text>
                            <Text>Plot: {this.props.movie.Plot}</Text>
                            <Text>Production: {this.props.movie.Production}</Text>
                            <Text>Awards: {this.props.movie.Awards}</Text>
                    </View>
                )
                : <Text>{this.props.message}</Text>
                }
            {
            this.props.bookmark === true ?
            <Button
            style={{marginTop: 10}}
            onPress={this.handleBookMark}
            title="Bookmarked"
            color="green"
            accessibilityLabel="Bookmark"
            />
            :
            <Button
            style={{marginTop: 10}}
            onPress={this.handleBookMark}
            title="Bookmark"
            accessibilityLabel="Bookmarked"
            />
            }
            </View>
        )
    }
}
export default Detailcontent
