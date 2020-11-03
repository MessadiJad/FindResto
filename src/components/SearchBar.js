import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const HomeScreen = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgoundStyle}>
            <Feather name="search" style={styles.iconeStyle} />
            <TextInput placeholder="Search" style={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgoundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom: 10

    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconeStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default HomeScreen;