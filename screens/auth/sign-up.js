import React from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../../App'


const SignUp = () => {
  return (
    <AuthContext.Consumer>
      {
        ({ SignUp }) => (
          <View >
            <Text>Auth Stack</Text>
            <Button onPress={() => signIn({ token: 'helo-token' })} title="Sign In" />
          </View>
        )
      }
    </AuthContext.Consumer>
  )
}

export default SignUp
