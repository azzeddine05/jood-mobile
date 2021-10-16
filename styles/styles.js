import { StyleSheet } from 'react-native'
import { theme } from './theme'

const globalStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: theme.color.primaryDark1,
    margin: 0,
    marginBottom: 10,
    padding: 13,
    paddingHorizontal :25 ,
    fontSize: 13,
    borderRadius: 30,
    fontFamily : 'Montserrat-Regular',
  },
  errorText: {
    color: 'crimson',
    fontFamily : 'Montserrat-Regular',
    fontSize: 11,
    marginStart : 10,
    paddingVertical : 1
  },
})

export default globalStyles
