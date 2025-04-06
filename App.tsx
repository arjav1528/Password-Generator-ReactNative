import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PasswordGeneratorPage from './components/page'

const App = () => {
  return (
    <View style={styles.container}>
      <PasswordGeneratorPage />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    
    height: '100%',
    width: '100%',
  },
})