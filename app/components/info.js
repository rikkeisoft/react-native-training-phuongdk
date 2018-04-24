import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import config from '../libs/config';

function Info() {
  const { page: { info: { appName, appDescription, author, division } } } = config
  const img = require('../images/imdb.png')
      return (
        <View style={styles.container}>
          <View style={{flex:1, justifyContent:'center', alignItems: 'center', borderBottomWidth: 0.5}}>
            <Image source={img} style={{width: 193, height: 110}} />
          </View>
            <View style={{flex: 0.4, flexDirection: 'row', borderBottomWidth: 0.5}}>
              <View style={styles.titleBlock}>
                <Text>Application Name</Text>
              </View>
              <View style={styles.contentBlock}>
                <Text>{appName}</Text>
              </View>
            </View>
            <View style={{flex: 0.8, flexDirection: 'row', borderBottomWidth: 0.5}}>
              <View style={styles.titleBlock}>
                <Text>Description</Text>
              </View>
              <View style={styles.contentBlock}>
                <Text>{appDescription}</Text>
              </View>
            </View>
            <View style={{flex: 0.4, flexDirection: 'row', borderBottomWidth: 0.5}}>
              <View style={styles.titleBlock}>
                  <Text>Author</Text>
              </View>
              <View style={styles.contentBlock}>
                  <Text>{author}</Text>
              </View>
            </View>
            <View style={{flex: 0.4, flexDirection: 'row', borderBottomWidth: 0.5}}>
              <View style={styles.titleBlock}>
                  <Text>Division</Text>
              </View>
              <View style={styles.contentBlock}>
                  <Text>{division}</Text>
              </View>
            </View>
        </View>
      )
  }

const styles = StyleSheet.create(
  {
    container: {
      flex:1,
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10,
      marginBottom: 10,
      borderColor: '#000000',
      borderWidth: 0.5,
      borderRadius: 2,
      backgroundColor: '#ffffff',
    },
    titleBlock: {
      flex: 0.4,
      justifyContent:'center',
      alignItems: 'center',
      borderRightWidth: 0.5
    },
    contentBlock: {
      flex: 0.6,
      justifyContent:'center',
      alignItems: 'center'
    }
  }
);

export default Info
