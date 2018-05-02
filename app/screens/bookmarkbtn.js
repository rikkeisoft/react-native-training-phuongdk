import React from 'react'
import { Button, View } from 'react-native'

function bookmarkbtn () {
  return (
    <View>
      <Button
        style={{marginTop: 10}}
        title='Bookmarked'
        color='green'
        accessibilityLabel='Bookmarked'
      />

      <Button
        style={{marginTop: 10}}
        title='Bookmark'
        accessibilityLabel='Bookmark'
      />
    </View>
  )
}
export default bookmarkbtn
