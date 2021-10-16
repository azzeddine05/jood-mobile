import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../../App'
import GoBack from '../../components/go-back'
import { theme } from '../../styles/theme'
import globalStyles from '../../styles/styles'
import PrimaryButton from '../../components/primary-button'


const ResetPassword = ({ navigation }) => {
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('')

  const goBack = () => {
    navigation.goBack()
  }

  const handleChange = (text) => {
    setEmail(text)
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
                <Text style={styles.title}>Récupérer le mot de passe</Text>
                <Text style={styles.description}>Entrez votre adresse e-mail complète et appuyer sur le bouton Envoyer.</Text>
                <TextInput
                  style={{ ...globalStyles.input }}
                  placeholder="Email"
                  placeholderTextColor='#a193a2'
                  onChangeText={(e) => handleChange(e)}
                  onBlur={handleBlur}
                  onFocus={handleFocued}
                  value={email}
                  textContentType="emailAddress"
                />
              </View>

              {sent &&
                <TouchableOpacity onPress={() => navigation.navigate('sign-in')}>
                  <Text style={{ padding: 10, textAlign: 'center' }}>
                    Nous vous avons envoyé un e-mail pour modifier votre mot de passe du compte concerné. 
                    <Text style={{fontWeight: 'bold'}}>Reconnexion</Text>
                  </Text>
                </TouchableOpacity>
              }

              <View>
              </View>
              <View>
                <PrimaryButton onPress={() => {
                  // send password reset request then show message
                  setSent(true)
                }} text="Envoyer" />
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

export default ResetPassword
