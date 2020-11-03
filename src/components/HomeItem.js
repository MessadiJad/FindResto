import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const HomeItem = ({ result }) => {

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        backgroundColor: '#FAFAFA'

    },
    image: {
        width: screenWidth - 20,
        height: 172,
        borderRadius: 5,
        marginBottom: 20
    },
    name: {
        fontWeight: 'bold',
    }
});

export default HomeItem;