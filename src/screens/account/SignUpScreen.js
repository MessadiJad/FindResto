import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import auth from '@react-native-firebase/auth';

export default class SignUpScreen extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }


  handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        alert('User account created & signed in!')
        this.props.navigation.navigate("Tab")
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!')
        }
        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!')
        }
        if (this.state.password != this.state.confirmPassword) {
          alert('Password do not match')
        }
        alert('All fields must be filled in')

      });
  }

  render() {

    return (

      <ImageBackground style={styles.imgBackground}
        resizeMode='cover'
        source={require('../../../assets/LoginBg.jpg')}>

        <View style={styles.container}>

          <StatusBar backgroundColor="#009387" barStyle="light-content" />

          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
              <View><Text style={styles.tex_footer}>Back</Text></View>
            </TouchableOpacity>

            <Text style={styles.text_header}>Register Now</Text>
          </View>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <Text style={styles.tex_footer}>Email</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Email"
                style={styles.inputBox}
                autoCapitalize="none"
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
                autoCapitalize="none"
              />
            </View>

            <Text style={styles.tex_footer}>Confirm Password</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Confirm password"
                secureTextEntry={true}
                style={styles.inputBox}
                onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                autoCapitalize="none"
              />
            </View>
            < TouchableOpacity style={styles.button} onPress={this.handleSignUp} >
              <View backgroundColor="#283D78" style={styles.signIn}>
                <Text style={[styles.textSign, { color: "#fff" }]}>Sign Up </Text>
              </View>


            </TouchableOpacity>
          </Animatable.View>
        </View>
      </ImageBackground>

    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff00",
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

  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
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
  backButton: {
    top: -80,
    marginLeft: 0,
    paddingTop: 0,
    width: 50,
    height: 20,
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
