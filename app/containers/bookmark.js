import React from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import { observer, inject } from 'mobx-react'

@inject('BookmarkStore')
@observer
class Bookmark extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.listBookMark()
  }

  listBookMark() {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((item, index, store) => {
          let obj = {}
          obj.id = store[index][0];
          obj.title = store[index][1];
          this.props.BookmarkStore.listBookMark(obj);
        });
      });
    });
  }

  render () { 
    const { navigation: { navigate }, BookmarkStore: { bookmarks } } = this.props;
    return (
      <View style={{ flex: 1, padding: 10}}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Movie bookmarked</Text>
        {
        bookmarks && bookmarks.length > 0
        ? bookmarks.map((item, key) => (
          <View key={key} style={{marginTop: 10}}>
          <Text style={{color: 'blue'}} onPress={() => {navigate('Detail',{movieId: item.id});}}>
            {item.title}
          </Text>
          </View>
        ))
        : <Text style={{fontSize: 15, textAlign: 'center'}}>Currently there are no bookmarked movies</Text>  
        }
      </View>
    )
  }
}
export default Bookmark
