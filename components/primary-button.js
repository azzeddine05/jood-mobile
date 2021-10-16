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
    backgroundColor: theme.color.primary,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  text: {
    color: theme.color.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default PrimaryButton
