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
import http from '../../utils/http'
import { ROUTES } from '../../utils/urls'
import Loading from '../../components/loading'


const SignUp = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    password_confirmation: ''
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (text, name) => {
    setUser(prevState => {
      return {
        ...prevState,
        [name]: text
      }
    })
  }

  const validateEmail = (email) => {
    var re = /\S{2,}@\S{2,}\.\S{2,}/
    return re.test(email)
  }

  const validateForm = () => {
    if (user.email === '') {
      setError('Veuillez saisir votre adresse mail.')
      return false
    }

    if (!validateEmail(user.email)) {
      setError('Veuillez saisir une adresse mail valide.')
      return false
    }

    if (user.password === '') {
      setError('Veuillez saisir votre mot de passe.')
      return false
    }

    if (user.password_confirmation === '') {
      setError('Veuillez confirmer votre mot de passe.')
      return false
    }

    if (user.password !== user.password_confirmation) {
      setError('Les mots de passes saisie ne sont pas identiques.')
      return false
    }

    setError(null)
    return true
  }

  const handleFormSubmit = async () => {
    setLoading(true)

    const data = {
      success: false,
      token: null
    }

    try {
      const response = await http.post(ROUTES.AUTH.REGISTER, user)

      data.success = response.data.success
      data.token = response.data.data.token
    } catch (err) {
      setError('Veuillez verifier votre mail et mot de passe.')
    }

    setLoading(false)

    return data
  }

  return (
    <AuthContext.Consumer>
      {
        ({ signUp }) => (
          <View style={styles.container}>
            {
              loading ? <Loading /> :
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

                    <Text style={styles.label}>Conﬁrmation du mot de passe</Text>
                    <TextInput
                      style={{ ...globalStyles.input }}
                      onChangeText={(e) => handleChange(e, 'password_confirmation')}
                      value={user.password_confirmation}
                      secureTextEntry
                    />

                    {
                      error && <Text style={styles.error}>{error}</Text>
                    }

                    <PrimaryButton
                      onPress={async () => {
                        if (validateForm()) {

                          const data = await handleFormSubmit()

                          if (data.success) {
                            signUp({ token: data.token })
                          }
                        }
                      }}
                      text="S'inscrire"
                    />
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
                </ScrollView>
            }
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
  error: {
    color: theme.color.danger
  }
});

export default SignUp
