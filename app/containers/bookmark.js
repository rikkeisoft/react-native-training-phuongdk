import React from 'react'
import { Text, View, AsyncStorage } from 'react-native'

class Bookmark extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.listBookMark()
  }

  listBookMark() {
    let arr = []
    let obj = {}
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          obj.id = store[i][0];
          obj.title = store[i][1];
          arr.push(obj);
          window.alert(store)
        });
      });
    });
    this.setState({
      movies: ['1', '2', '3']
    })
  }

  render () {
    return (
      <View style={{ flex: 1, padding: 10}}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Movie bookmarked</Text>
      
        {
        this.state.movies.map((item, key) => (
          <View key={key}>
          <Text>{item.id}</Text>
          <Text>{item.Title}</Text>
          </View>
))

}

      </View>
    )
  }
}
export default Bookmark
