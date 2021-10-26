import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Video from 'react-native-video'
import { AuthContext } from '../App'
import presentaion from '../assets/presentation.mp4'

const Home = () => {
  const onBuffer = () => {
    console.log('on buffer')
  }

  const onVideoError = (e) => {
    console.log('on onVideoError', e)
  }

  return (
    <AuthContext.Consumer>
      {
        ({ signOut }) => (
          <>
            <Text>presentaion</Text>
            <Video
              source={presentaion}   // Can be a URL or a local file.
              controls
              fullscreen={false}
              onBuffer={onBuffer}
              onError={onVideoError}
              style={styles.backgroundVideo}
            />
          </>
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
