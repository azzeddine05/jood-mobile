import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native'
import { AuthContext } from '../../App'
import GoBack from '../../components/go-back'
import { theme } from '../../styles/theme'
import globalStyles from '../../styles/styles'
import PrimaryButton from '../../components/primary-button'

const EditProfile = () => {
  const [profile, setProfile] = useState({
    lastname: '',
    firstname: '',
    phone_number: '',
    cin: '',
    birthdate: '',
    city: '',
    interest: '',
  })

  const handleChange = (text, name) => {
    setProfile(prevState => {
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
        ({ editProfile }) => (
          <View style={styles.container}>
            {/* 
              <GoBack onPress={goBack} /> 
              go back may be removed or conditional
            */}
            <ScrollView contentContainerStyle={styles.signUpContainer}>
              <View style={{ width: '100%' }}>
                <Text style={styles.title}>Profile</Text>
                <TextInput
                  style={{ ...globalStyles.input }}
                  placeholder="Nom"
                  placeholderTextColor='#a193a2'
                  onChangeText={(e) => handleChange(e, 'lastname')}
                  onBlur={handleBlur}
                  onFocus={handleFocued}
                  value={profile.lastname}
                />
                <TextInput
                  style={{ ...globalStyles.input }}
                  placeholder="Prénom"
                  placeholderTextColor='#a193a2'
                  onChangeText={(e) => handleChange(e, 'firstname')}
                  onBlur={handleBlur}
                  onFocus={handleFocued}
                  value={profile.firstname}
                />
                <TextInput
                  style={{ ...globalStyles.input }}
                  placeholder="Numéro de telephone"
                  placeholderTextColor='#a193a2'
                  onChangeText={(e) => handleChange(e, 'phone_number')}
                  onBlur={handleBlur}
                  onFocus={handleFocued}
                  value={profile.phone_number}
                />
                <TextInput
                  style={{ ...globalStyles.input }}
                  placeholder="CIN"
                  placeholderTextColor='#a193a2'
                  onChangeText={(e) => handleChange(e, 'cin')}
                  onBlur={handleBlur}
                  onFocus={handleFocued}
                  value={profile.cin}
                />
                <TextInput
                  style={{ ...globalStyles.input }}
                  placeholder="Date de naissance"
                  placeholderTextColor='#a193a2'
                  onChangeText={(e) => handleChange(e, 'birthdate')}
                  onBlur={handleBlur}
                  onFocus={handleFocued}
                  value={profile.birthdate}
                />
                <TextInput
                  style={{ ...globalStyles.input }}
                  placeholder="Ville"
                  placeholderTextColor='#a193a2'
                  onChangeText={(e) => handleChange(e, 'city')}
                  onBlur={handleBlur}
                  onFocus={handleFocued}
                  value={profile.city}
                />
                <TextInput
                  style={{ ...globalStyles.input }}
                  placeholder="Centre d'intêret"
                  placeholderTextColor='#a193a2'
                  onChangeText={(e) => handleChange(e, 'interest')}
                  onBlur={handleBlur}
                  onFocus={handleFocued}
                  value={profile.interest}
                />
                <PrimaryButton onPress={() => editProfile(profile)} text="Valider" />
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
    alignItems: 'center',
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

export default EditProfile
