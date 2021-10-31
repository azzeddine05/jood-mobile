import { StyleSheet } from 'react-native'
import { theme } from './theme'

const globalStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: theme.color.dark,
    paddingVertical: 10,
    paddingHorizontal: 25,
    fontSize: 13,
    borderRadius: 20,
  },
  errorText: {
    color: 'crimson',
    fontSize: 11,
    marginStart: 10,
    paddingVertical: 1
  },
})

export default globalStyles
