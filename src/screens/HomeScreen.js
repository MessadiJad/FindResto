import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import SearchBar from '../components/SearchBar'
import userResults from '../hooks/useResults'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ResultsDetailsScreen from './Cells/ResultsDetailsScreen'
import { AsyncStorage } from 'react-native';

const HomeScreen = ({ title, navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = userResults('');

  const myArray = [];

  return (
    <View style={styles.container}>
      <SearchBar term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>

        <View style={styles.container}>

          <Text style={styles.titleStyle}>{title}</Text>
          <FlatList

            vertical
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => results.id}
            renderItem={({ item }) => {

              return (
                <View>

                  <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
                    <ResultsDetailsScreen result={item} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={
                    _storeData = async () => {
                      myArray.push(item)
                      try {
                        await AsyncStorage.setItem(
                          'favorits',
                          JSON.stringify(myArray)
                        );
                        alert("Saved to favorites")
                      } catch (error) {
                        // Error saving data
                        console.log(error);
                        alert(error)
                      }
                    }
                  }>
                    <Image style={styles.favIcon} source={require("../../assets/bluestar.png")} />
                  </TouchableOpacity>
                </View>
              )
            }
            }

          />
        </View>
      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  favIcon: {
    alignSelf: 'flex-end',
    marginRight: 10,

  }
});

export default HomeScreen;