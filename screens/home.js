import React from 'react'
import { Button, Text } from 'react-native'
import { AuthContext } from '../App'


const Home = () => {
  return (
    <AuthContext.Consumer>
      {
        ({ signOut }) => (
          <>
            <Text>Auth Stack</Text>
            <Button onPress={() => signOut()} title="Sign Out" />
          </>
        )
      }
    </AuthContext.Consumer>
  )
}

export default Home
