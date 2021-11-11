import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import logo from '../../assets/logo.png'
import charity from '../../assets/charity.png'
import { theme } from '../../styles/theme'

const AuthHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      {/* <Text style={styles.title}>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </Text>
      <Image source={charity} style={styles.charity} />
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam sollicitudin turpis non ante mattis
        blandit. Sed sed sodales metus. Praesent quam
      </Text> */}
      <View style={styles.authButtons}>
        <TouchableOpacity style={styles.signinButton} onPress={() => navigation.navigate('sign-in')}>
          <Text style={styles.signinButtonText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('sign-up')}>
          <Text style={styles.registerButtonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25
  },
  title: {
    color: theme.color.secondary,
    fontWeight: 'bold',
    fontSize: 21
  },
  description: {
    textAlign: 'center',
    marginBottom: 10,
  },
  charity: {
    width: 300,
    height: 300
  },
  authButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    right: 10,
    marginBottom: 10,
  },
  signinButton: {
    backgroundColor: theme.color.green,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    left: 20,
    zIndex: 10
  },
  signinButtonText: {
    color: theme.color.light,
    fontWeight: 'bold'
  },
  registerButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: theme.color.green,
    borderWidth: 3,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  registerButtonText: {
    color: theme.color.primary,
    fontWeight: 'bold'
  },
});


export default AuthHome