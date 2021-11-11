import React from 'react'
import { Button, StyleSheet, Text, View, _View } from 'react-native'
import { AuthContext } from '../App'
// import Video from 'react-native-video'
// import presentaion from '../assets/presentation.mp4'

const Home = () => {
  // const onBuffer = () => {
  //   console.log('on buffer')
  // }

  // const onVideoError = (e) => {
  //   console.log('on onVideoError', e)
  // }

  return (
    <AuthContext.Consumer>
      {
        ({ signOut }) => (
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', marginTop: 50 }}>Profile Screen</Text>
            <View style={{ marginTop: 'auto', marginBottom: 100, marginHorizontal: 20 }}><Button title="LOGOUT" onPress={signOut} /></View>

            {/* <Video
              source={presentaion}   // Can be a URL or a local file.
              controls
              fullscreen={false}
              onBuffer={onBuffer}
              onError={onVideoError}
              style={styles.backgroundVideo}
            /> */}
          </View>
        )
      }
    </AuthContext.Consumer>
  )
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Home
