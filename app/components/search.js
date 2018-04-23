import React from 'react';
import { Button, Text, View } from 'react-native';

class Search extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Search!</Text>
          <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        </View>
      );
    }
}
export default Search
