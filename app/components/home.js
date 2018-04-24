import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import config from '../libs/config'

function Home () {
  const { page: { home: { appName, description, copyright } } } = config
  return (
    <View style={styles.container}>
      <View style={{flex: 0.5, flexDirection: 'row', borderBottomWidth: 0.5}}>
        <View style={styles.titleBlock}>
          <Text>Application Name</Text>
        </View>
        <View style={styles.contentBlock}>
          <Text>{appName}</Text>
        </View>
      </View>
      <View style={{flex: 3, borderBottomWidth: 0.5}}>
        <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5}}>
          <Text>Description</Text>
        </View>
        <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text>{description}</Text>
        </View>
      </View>
      <View style={{flex: 0.5, flexDirection: 'row'}}>
        <View style={styles.titleBlock}>
          <Text>Copyright</Text>
        </View>
        <View style={styles.contentBlock}>
          <Text>{copyright}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 0.8,
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10,
      marginBottom: 10,
      borderColor: '#000000',
      borderWidth: 0.5,
      borderRadius: 2,
      backgroundColor: '#ffffff'
    },
    titleBlock: {
      flex: 0.4,
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 0.5
    },
    contentBlock: {
      flex: 0.6,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
)

export default Home
