import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../styles/theme'

const SocialLoginButton = ({ text, onPress, children }) => {
  return (
    <TouchableOpacity style={styles.socialLoginButton} onPress={() => onPress()}>
      <View style={styles.icon}>{children}</View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  socialLoginButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.color.light,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginTop: 15,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.color.dark,
  },
  text: {
    color: theme.color.dark,
    textAlign: 'center',
    fontSize: 17,
  },
  icon: {
    marginRight: 10,
  },
})

export default SocialLoginButton
