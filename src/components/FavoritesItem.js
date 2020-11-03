import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const FavoritesItem = ({ result }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />

            <Text style={styles.name}>{result.name}</Text>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth - 20,
        height: 100,
        backgroundColor: '#FAFAFA',
        borderRadius: 5,
        marginTop: 10
    },
    image: {
        width: 80,
        height: 90,
    },
    name: {
        fontWeight: 'bold',
        marginLeft: 100,
        top: -50
    }
});

export default FavoritesItem;