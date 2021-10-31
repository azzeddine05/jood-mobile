import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { AuthContext } from '../../App'
import { theme } from '../../styles/theme'
import globalStyles from '../../styles/styles'
import PrimaryButton from '../../components/primary-button'
import Logo from '../../components/logo'
import separator from '../../assets/separator.png'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import SocialLoginButton from '../../components/social-login-button'


const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (text, name) => {
    setUser(prevState => {
      return {
        ...prevState,
        [name]: text
      }
    })
  }

  return (
    <AuthContext.Consumer>
      {
        ({ signIn }) => (
          <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.signUpContainer}>
              <Logo />

              <View style={styles.inputContainer}>
                <Text style={styles.title}>Connexion</Text>
                <Text style={styles.label}>Adresse mail</Text>
                <TextInput
                  style={{ ...globalStyles.input }}
                  onChangeText={(e) => handleChange(e, 'email')}
                  value={user.email}
                  textContentType="emailAddress"
                />

                <Text style={styles.label}>Mot de passe</Text>
                <TextInput
                  style={{ ...globalStyles.input }}
                  onChangeText={(e) => handleChange(e, 'password')}
                  value={user.password}
                  secureTextEntry
                />

                <PrimaryButton onPress={() => signIn({ token: 'helo-token' })} text="Se connecter" />
              </View>

              <Image style={{ marginTop: 10 }} source={separator} />

              <View style={styles.inputContainer}>
                <SocialLoginButton text="Continuer avec google" onPress={() => console.log('google login')}>
                  <Image source={google} />
                </SocialLoginButton>
                <SocialLoginButton text="Continuer avec facebook" onPress={() => console.log('facebook login')}>
                  <Image source={facebook} />
                </SocialLoginButton>
              </View>
              {/* <View>
                <TouchableOpacity
                  style={{ paddingVertical: 15, textAlign: 'center' }}
                  onPress={() => navigation.navigate('sign-up')}
                >
                  <Text style={{ color: theme.color.dark }}>Pas encore de compte ? <Text style={{ fontWeight: 'bold' }}>Inscrivez-vous !</Text></Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('reset-password')}>
                  <Text style={{ color: theme.color.dark, paddingBottom: 10, textAlign: 'right' }}>Mot de passe oublié ?</Text>
                </TouchableOpacity> 
              </View>*/}
            </ScrollView>
          </View>
        )
      }
    </AuthContext.Consumer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  signUpContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 25,
  },
  label: {
    color: theme.color.dark,
    padding: 8,
    fontSize: 16,
  },
  title: {
    color: theme.color.dark,
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 10
  },
  authButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    right: 10,
    marginBottom: 10,
  },
  signinButton: {
    backgroundColor: theme.color.primary,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    left: 20,
    zIndex: 10
  },
  signinButtonText: {
    color: theme.color.secondary,
    fontWeight: 'bold'
  },
  registerButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: theme.color.secondary,
    borderWidth: 3,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  registerButtonText: {
    color: theme.color.primary,
    fontWeight: 'bold'
  },
});

export default SignIn
