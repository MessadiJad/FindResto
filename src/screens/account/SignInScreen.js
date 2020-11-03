import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
  TouchableOpacity,
  StatusBar,
  TextInput
} from "react-native";
import * as Animatable from "react-native-animatable";
import Logo from '../../components/Logo'
import auth from '@react-native-firebase/auth';
import Loader from '../../components/Loader'
export default class SignInScreen extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  handleSignIn = () => {

    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        <Loader />
        this.props.navigation.navigate("Tab")
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }
        if (this.state.email == "" || this.state.password == "") {
          alert('All fields must be filled in')
        }
        alert('Invalid credentials')

      });
  }
  render() {

    return (
      <ImageBackground style={styles.imgBackground}
        resizeMode='cover'
        source={require('../../../assets/LoginBg.jpg')}>
        <View style={styles.container}>
          <Logo></Logo>
          <StatusBar backgroundColor="#009387" barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>Sign In</Text>
          </View>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <Text style={styles.tex_footer}>Email</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Email"
                style={styles.inputBox}
                autoCapitalize="none"
                spellCheck={false}
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            <Text style={styles.tex_footer}>Password</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
                style={styles.inputBox}
                spellCheck={false}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={this.handleSignIn}
                style={[
                  styles.signIn,
                  { borderColor: "#283D78", borderWidth: 1, marginTop: 15 },
                ]}
              >
                <View
                  backgroundColor="#283D78" style={styles.signIn}>
                  <Text style={[styles.textSign, { color: "#fff" }]}>Sign In </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SignUp")}
                style={[
                  styles.signIn,
                  { borderColor: "#283D78", borderWidth: 1, marginTop: 15 },
                ]}
              >
                <Text style={[styles.textSign, { color: "#fff" }]}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </ImageBackground>

    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#ffffff00",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  tex_footer: {
    color: "#fff",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    height: 10,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  inputBox: {
    width: 380,
    height: 50,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  }

});
