import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../../App'
import GoBack from '../../components/go-back'
import { theme } from '../../styles/theme'
import globalStyles from '../../styles/styles'
import PrimaryButton from '../../components/primary-button'


const SignIn = ({ navigation }) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const goBack = () => {
    navigation.goBack()
  }

  const handleChange = (text, name) => {
    setUser(prevState => {
      return {
        ...prevState,
        [name]: text
      }
    })
  }

  const handleBlur = (e) => {

  }

  const handleFocued = (e) => {

  }

  return (
    <AuthContext.Consumer>
      {
        ({ signIn }) => (
          <View style={styles.container}>
            <GoBack onPress={goBack} />
            <ScrollView contentContainerStyle={styles.signUpContainer}>
              <View>
                <Text style={styles.title}>Connexion</Text>
                <Text style={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing eliturpis non ante mattis .
                </Text>
                <TextInput
                  style={{ ...globalStyles.input }}
                  placeholder="Email"
                  placeholderTextColor='#a193a2'
                  onChangeText={(e) => handleChange(e, 'email')}
                  onBlur={handleBlur}
                  onFocus={handleFocued}
                  value={user.email}
                  textContentType="emailAddress"
                />
                <TextInput
                  style={{ ...globalStyles.input }}
                  placeholder="Mot de passe"
                  placeholderTextColor='#a193a2'
                  onChangeText={(e) => handleChange(e, 'password')}
                  onBlur={handleBlur}
                  onFocus={handleFocued}
                  value={user.password}
                  secureTextEntry
                />
                <TouchableOpacity onPress={() => navigation.navigate('reset-password')}>
                  <Text style={{ paddingBottom: 10, textAlign: 'right' }}>Mot de passe oublié ?</Text>
                </TouchableOpacity>
              </View>

              <View>
                {/* social logins */}
              </View>
              <View>
                <TouchableOpacity
                  style={{ marginTop: '80%', paddingVertical: 15, textAlign: 'center' }}
                  onPress={() => navigation.navigate('sign-up')}
                >
                  <Text>Pas encore de compte ? <Text style={{ fontWeight: 'bold' }}>Inscrivez-vous !</Text></Text>
                </TouchableOpacity>
                <PrimaryButton onPress={() => signIn({ token: 'helo-token' })} text="Se connecter" />
              </View>
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
    paddingHorizontal: 25,
  },
  signUpContainer: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackButtonArrow: {
    fontWeight: 'bold',
    fontSize: 32,
    color: theme.color.primary,
    marginRight: 5,
    bottom: 2
  },
  goBackButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: theme.color.primary
  },
  title: {
    color: theme.color.secondary,
    fontWeight: 'bold',
    fontSize: 21,
    textAlign: 'center'
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
