import React from 'react'
import { Button, Text } from 'react-native'
import { AuthContext } from '../../App'


const SignIn = () => {
  return (
    <AuthContext.Consumer>
      {
        ({ signIn }) => (
          <>
            <Text>Auth Stack</Text>
            <Button onPress={() => signIn({ token: 'helo-token' })} title="Sign In" />
          </>
        )
      }
    </AuthContext.Consumer>
  )
}

export default SignIn
