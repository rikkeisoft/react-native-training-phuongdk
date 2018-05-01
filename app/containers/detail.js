import React from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import Detailcontent from '../screens/detail';

@inject('DetailStore')
@observer
class Detail extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  constructor(props) {
    super(props);
    this.handleBookMark = this.handleBookMark.bind(this);
    this.props.DetailStore.initVal();
  }

  handleBookMark(id, title) {
    this.props.DetailStore.handleBookMark(id, title);
  }

  componentDidMount() {
    this.movieId = this.props.navigation.state.params.movieId ? this.props.navigation.state.params.movieId : null;
    this.props.DetailStore.getMovie(this.movieId);
    this.props.DetailStore.checkBookMark(this.movieId);
  }

  render () {
    const {DetailStore: { movie, message, bookmark } } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', borderWidth:0.5, margin: 10, padding: 10, backgroundColor: '#ffffff', minHeight: '10%' }}>
        <Detailcontent onBookMarkChange={this.handleBookMark} movie={movie || null} message={message} bookmark={bookmark} />
      </View>
    )
  }
}
export default Detail
