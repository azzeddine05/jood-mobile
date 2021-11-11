import React, { createContext, useEffect, useMemo, useReducer } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EncryptedStorage from 'react-native-encrypted-storage'
import SignIn from './screens/auth/sign-in'
import Home from './screens/home'
import AuthHome from './screens/auth'
import SignUp from './screens/auth/sign-up'
import ResetPassword from './screens/auth/reset-password'


const Stack = createNativeStackNavigator();
export const AuthContext = createContext()

const App = () => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          }
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          }
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          }
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  )

  useEffect(() => {

    (async () => {
      let userToken

      try {
        userToken = await EncryptedStorage.getItem('userToken')
      } catch (e) {
        userToken = null
      }

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken })
    })()

  }, [])

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        await EncryptedStorage.setItem('userToken', data.token)
        dispatch({ type: 'SIGN_IN', token: data.token })
      },
      signOut: async () => {
        await EncryptedStorage.removeItem('userToken')
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async data => {
        await EncryptedStorage.setItem('userToken', data.token)
        dispatch({ type: 'SIGN_IN', token: data.token })
      },
      editProfile: async data => {
        // console.log(data)
        // here call the edit profile end point
        // later we will extract context in contexts folder
      }
    }),
    []
  )

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {
            state.userToken == null ? (
              <>
                <Stack.Screen name="auth-home" component={AuthHome} />
                <Stack.Screen name="sign-in" component={SignIn} />
                <Stack.Screen name="sign-up" component={SignUp} />
                <Stack.Screen name="reset-password" component={ResetPassword} />
              </>
            ) : (
              <>
                <Stack.Screen name="home" component={Home} />
                {/* <Stack.Screen name="home" component={EditProfile} /> */}
                {/* <Stack.Screen name="home" component={AccepteCharte} /> */}
                {/* <Stack.Screen name="Home" component={HomeScreen} />*/}
                {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
              </>
            )
          }
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  )
}


export default App
