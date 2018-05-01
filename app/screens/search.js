import React from 'react';
import { Button, Text, View, TextInput, FlatList, Image } from 'react-native';

function Searchcontent(props) {
    return (
        <View>
            {
            props.movies && props.movies.length > 0 &&            
            <View style={{flex: 0.1}}>
                <TextInput placeholder="Search by movie name..." />
            </View>
            }
            {
            props.movies && props.movies.length > 0 ? 
            (
                <FlatList
                data={props.movies}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item }) => (
                    <View style={{flexDirection: 'row', borderBottomWidth: 0.5, padding: 10, marginBottom: 5}}>
                    <View style={{flex: 0.4}}>
                        <Image source={{uri: item.Poster}} style={{width: 120, height: 120}} />
                    </View>
                    <View style={{flex: 0.6, marginLeft: 10}}>
                        <Text>Title: {item.Title}</Text>
                        <Text>Published Date: {item.Year}</Text>
                        <Text>Type: {item.Type}</Text>
                        <Text>ID: {item.imdbID}</Text>
                    <View style={{flex: 0.5}}>    
                        <Button
                        title="Read more"
                        onPress={
                            () => {
                            props.navigate('Detail',
                                {
                                    movieId: item.imdbID || null
                                }
                            );
                        }
                    }
                        />
                    </View>    
                    </View>
                    </View>
                    )}
                />
            )
            : <Text>{props.message}</Text>
            }
        </View>
    )
}
export default Searchcontent
