import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { AuthContext } from '../../App'
import GoBack from '../../components/go-back'
import { theme } from '../../styles/theme'
import globalStyles from '../../styles/styles'
import PrimaryButton from '../../components/primary-button'

const AccepteCharte = () => {

  const handleBlur = (e) => {

  }

  const handleFocued = (e) => {

  }

  return (
    <AuthContext.Consumer>
      {
        ({ accepteCharte }) => (
          <View style={styles.container}>
            {/* 
              <GoBack onPress={goBack} /> 
              go back may be removed or conditional
            */}
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>Profile</Text>
              <ScrollView style={styles.charte}>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Integer fringilla erat sed
                  elit elementum, nec congue eros
                  fermentum. Pellentesque congue, sem
                  sed facilisis elementum, diam dolor
                  suscipit risus, quis vulputate lorem nunc
                  non enim. Fusce volutpat consectetur
                  urna, fermentum dictum ipsum. Fusce
                  tristique neque id dolor lacinia luctus.
                  Pellentesque scelerisque interdum mi, et
                  viverra eros dignissim vitae. Pellentesque
                  quis enim eu metus pretium egestas
                  tempor vel ligula. Quisque imperdiet
                  porta neque, nec volutpat ligula sodales
                  id. Vivamus ut tellus feugiat, lobortis lacus
                  id, hendrerit dui. Ut consectetur nec tellus
                  vel sodales. Phasellus eleifend sed diam
                  nec sagittis. Vestibulum vel nisi
                  elementum, tempor justo eget,
                  sollicitudin elit. Aenean ex nisi, iaculis
                  eget sapien id, dignissim volutpat nisl.
                  Curabitur nec erat consectetur,
                  bibendum quam sit amet, mollis tellus.
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Integer fringilla erat sed
                  elit elementum, nec congue eros
                  fermentum. Pellentesque congue, sem
                  sed facilisis elementum, diam dolor
                  suscipit risus, quis vulputate lorem nunc
                  non enim. Fusce volutpat consectetur
                  urna, fermentum dictum ipsum. Fusce
                  tristique neque id dolor lacinia luctus.
                  Pellentesque scelerisque interdum mi, et
                  viverra eros dignissim vitae. Pellentesque
                  quis enim eu metus pretium egestas
                  tempor vel ligula. Quisque imperdiet
                  porta neque, nec volutpat ligula sodales
                  id. Vivamus ut tellus feugiat, lobortis lacus
                  id, hendrerit dui. Ut consectetur nec tellus
                  vel sodales. Phasellus eleifend sed diam
                  nec sagittis. Vestibulum vel nisi
                  elementum, tempor justo eget,
                  sollicitudin elit. Aenean ex nisi, iaculis
                  eget sapien id, dignissim volutpat nisl.
                  Curabitur nec erat consectetur,
                  bibendum quam sit amet, mollis tellus.
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Integer fringilla erat sed
                  elit elementum, nec congue eros
                  fermentum. Pellentesque congue, sem
                  sed facilisis elementum, diam dolor
                  suscipit risus, quis vulputate lorem nunc
                  non enim. Fusce volutpat consectetur
                  urna, fermentum dictum ipsum. Fusce
                  tristique neque id dolor lacinia luctus.
                  Pellentesque scelerisque interdum mi, et
                  viverra eros dignissim vitae. Pellentesque
                  quis enim eu metus pretium egestas
                  tempor vel ligula. Quisque imperdiet
                  porta neque, nec volutpat ligula sodales
                  id. Vivamus ut tellus feugiat, lobortis lacus
                  id, hendrerit dui. Ut consectetur nec tellus
                  vel sodales. Phasellus eleifend sed diam
                  nec sagittis. Vestibulum vel nisi
                  elementum, tempor justo eget,
                  sollicitudin elit. Aenean ex nisi, iaculis
                  eget sapien id, dignissim volutpat nisl.
                  Curabitur nec erat consectetur,
                  bibendum quam sit amet, mollis tellus.
                </Text>
              </ScrollView>
              <Text style={styles.description}>
                En validant j'accepte la charte
              </Text>
              <PrimaryButton onPress={() => accepteCharte(true)} text="Valider" />
            </View>
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
  charte: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.color.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10
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


export default AccepteCharte
