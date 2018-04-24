import React from 'react'
import { Text, View } from 'react-native'

class Bookmark extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, padding: 10}}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Movie bookmarked</Text>
      </View>
    )
  }
}
export default Bookmark
