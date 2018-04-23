import React from 'react';
import { Button, Text, View, StyleSheet, FlatList } from 'react-native';

function Home() {
    return (


      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10,
      borderColor: '#000000',
      borderWidth: 0.5,
      borderRadius: 3,
      backgroundColor: '#ffffff',
    },
    cellLeft: {
      width: 50,
      flexGrow: 1,
      justifyContent: 'flex-start',
    },
    cellRight: {
      width: 100,
      flexGrow: 3,
      justifyContent: 'flex-end',
    }
  }
);

export default Home