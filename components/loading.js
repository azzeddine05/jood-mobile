import React from 'react'
import { ActivityIndicator, Image, View } from 'react-native'
import logo from '../assets/logo.png'

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
      <Image source={logo} />
    </View>
  )
}

export default Loading
