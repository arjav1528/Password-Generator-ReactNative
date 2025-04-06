import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
const {height, width} = Dimensions.get('window');

const PasswordGeneratorPage = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Password Generator</Text>
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password Length</Text>
            <TextInput
                placeholder='Enter Length'
                placeholderTextColor='#333'
                keyboardType="numeric"
                textAlign='center'
                autoCapitalize='none'
                maxLength={32}
                
                
                style={styles.input}
             />
        </View>
      
      
    </View>
  )
}

export default PasswordGeneratorPage

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        paddingTop: 0.1 * height,
        backgroundColor: '#29282a',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 0.05 * height,
        textAlign: 'center',
    },
    inputContainer: {
        width: width * 0.9,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    inputLabel: {
        color: "white", 
        fontSize: 20,
    },
    input: {
        width: 0.35 * width,
        height: 40,
        backgroundColor: 'white',
        color: '#333',
        borderRadius: 10,
        padding: 0,
        fontSize: 16,
        textAlign: 'center',
    },
})