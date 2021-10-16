import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { theme } from '../styles/theme'


const GoBack = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.goBackButton} onPress={() => onPress()}>
      <Text style={styles.goBackButtonArrow}>{`<`}</Text>
      <Text style={styles.goBackButtonText}>Retour</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
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
})

export default GoBack
