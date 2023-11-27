import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/feature/user/userSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigation = useNavigation()

  const handleLogin = () => {
    console.log('Email:', email)
    console.log('Password:', password)

    dispatch(
      login({
        email,
        password,
        isLogin: true,
      })
    )
    navigation.navigate('Profile Page')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(e) => setEmail(e)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(e) => setPassword(e)}
        value={password}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
})

export default Login
