import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 100, height: 100 }}
          source={require('../../assets/logo.png')} />
        <Text style={styles.logoText}>Find Resto</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center'
  },
  logoText: {
    marginVertical: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.7)'
  }
});