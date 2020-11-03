import React, { Component } from "react";
import { StyleSheet, View, FlatList, ScrollView, TouchableOpacity, Text } from "react-native";
import FavoritesCell from './Cells/FavoritesCell'
import { AsyncStorage } from 'react-native';

export default class FavorisScreen extends Component {
  constructor() {
    super()
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    this._retrieveData()
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('favorits');
      if (value !== null) {
        this.setState({ results: JSON.parse(value) });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.main}>

        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
          <View><Text style={styles.tex_footer}>Back</Text></View>
        </TouchableOpacity>

        <View style={styles.container}>


          <ScrollView>

            <FlatList

              vertical
              showsHorizontalScrollIndicator={false}
              data={this.state.results}
              keyExtractor={(result) => this.state.results.id}
              renderItem={({ item }) => {
                return (
                  <View>
                    <FavoritesCell result={item} />
                  </View>
                )
              }}
            />
          </ScrollView>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    marginLeft: 15,
    top: 50,
    right: 170,
    width: 50,
    height: 20,
    fontSize: 15

  },
  tex_footer: {
    fontSize: 18,
  }
});
