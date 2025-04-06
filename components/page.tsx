import { Alert, Clipboard, Dimensions, ScrollView, StyleSheet, Switch, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
const {height, width} = Dimensions.get('window');

const PasswordGeneratorPage = () => {
    const [passwordLength, setPasswordLength] = useState(0);
    const [password, setPassword] = useState('');
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(true);
    const [numbers, setNumbers] = useState(false);
    const [specialCharacters, setSpecialCharacters] = useState(false);


    const generatePassword = () => {
        if (passwordLength < 1) {
            Alert.alert("Please enter a valid password length");
            return;
        }

        let password = '';
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numbersChars = '0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        if (upperCase) {
            password += upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length));
        }
        if (lowerCase) {
            password += lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length));
        }
        if (numbers) {
            password += numbersChars.charAt(Math.floor(Math.random() * numbersChars.length));
        }
        if (specialCharacters) {
            password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
        }

        for (let i = password.length; i < passwordLength; i++) {
            const allChars = `${upperCase ? upperCaseChars : ''}${lowerCase ? lowerCaseChars : ''}${numbers ? numbersChars : ''}${specialCharacters ? specialChars : ''}`;
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        setPassword(password);
    }



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
                onChangeText={(text) => {
                    if (text.length > 0) {
                        setPasswordLength(parseInt(text));
                    } else {
                        setPasswordLength(0);
                    }
                }}
                value={passwordLength.toString()}
                autoCapitalize='none'
                maxLength={32}
                
                
                style={styles.input}
             />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Include Uppercase</Text>
            <Switch
                value={upperCase}
                onValueChange={(value : boolean) => {
                    setUpperCase(value);
                }}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Include LowerCase</Text>
            <Switch
                value={lowerCase}
                onValueChange={(value : boolean) => {
                    setLowerCase(value);
                }}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Include Numbers</Text>
            <Switch
                value={numbers}
                onValueChange={(value : boolean) => {
                    setNumbers(value);
                }}
            />
        </View>
      
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Include Special Characters</Text>
            <Switch
                value={specialCharacters}
                onValueChange={(value : boolean) => {
                    setSpecialCharacters(value);
                }}
            />
        </View>


        <TouchableOpacity
            onPress={() => {
                generatePassword();
                console.log("Password generated");
                console.log(password);
            }}
            style={{
                backgroundColor: '#333',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                marginTop: 20,
            }}
        >
            <Text style={{ color: '#fff', fontSize: 20 }}>Generate Password</Text>
        </TouchableOpacity>

        <View>
            <Text style={{ color: '#fff', fontSize: 20, marginTop: 20 }}>Generated Password (Press To Copy)</Text>
            <TouchableOpacity
                onPress={() => {
                    Clipboard.setString(password);
                    Alert.alert("Password copied to clipboard");
                }}
                style={{
                    backgroundColor: '#333',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                    marginTop: 10,
                }}
                >
                <Text style={{ color: 'white', fontSize: 20 }}>{password}</Text>
                </TouchableOpacity>
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
        justifyContent: 'space-between',
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