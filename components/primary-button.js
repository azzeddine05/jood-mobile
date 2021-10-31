import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { theme } from '../styles/theme'

const PrimaryButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={() => onPress()}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: theme.color.green,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 15,
  },
  text: {
    color: theme.color.light,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  },
})

export default PrimaryButton
