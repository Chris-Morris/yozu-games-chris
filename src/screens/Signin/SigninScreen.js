import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import DropShadow from "react-native-drop-shadow";
import { AuthContext } from '../../context/authContext';

const SigninScreen = () => {
    const [username, setUsername] = useState('');
    const [invalidUsername, setInvalidUsername] = useState(false);
    const [password, setPassword] = useState('');
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        if (username.length < 5) {
            setInvalidUsername(true);
        } else {
            setInvalidUsername(false);
        };

        if (username.length === 0) {
            setInvalidUsername(false);
        };

        if (password.length < 5) {
            setInvalidPassword(true);
        } else {
            setInvalidPassword(false);
        };

        if (password.length === 0) {
            setInvalidPassword(false);
        };

        if (username.length >= 5 && password.length >= 5) {
            setInvalidUsername(false);
            setInvalidPassword(false);
            setShowButton(true);
        };
    }, [username, password]);

    const signinError = () =>
        Alert.alert(
            "Sign In Error",
            "Please enter required details",
            [
                { text: "OK" }
            ]
        );

    let usernameStyle = styles.input;
    if (invalidUsername) {
        usernameStyle = styles.invalidInput;
    };

    let passwordStyle = styles.input;
    if (invalidPassword) {
        passwordStyle = styles.invalidInput;
    };

    return (
        <ScrollView contentContainerStyle={styles.container} >
            <DropShadow style={styles.shadowProps} >
                <Card containerStyle={styles.card}>
                    <Card.Title>Sign In</Card.Title>
                    <Card.Divider />
                    <View>
                        <Text>Please enter your username</Text>
                        <Text>(min 5 characters)</Text>
                        <TextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            clearButtonMode='always'
                            style={usernameStyle}
                            placeholder="Username"
                            value={username}
                            onChangeText={setUsername}
                        />
                    </View>

                    <View>
                        <Text>Please enter a valid password</Text>
                        <TextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            clearButtonMode='always'
                            style={passwordStyle}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    {showButton ?
                        <TouchableOpacity style={styles.button} onPress={() => signIn()} testID='enabledButton'><Text style={{ color: 'white' }} >Sign In</Text></TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.inactiveButton} onPress={signinError} testID='disabledButton'><Text style={{ color: 'white' }} >Sign In</Text></TouchableOpacity>
                    }
                </Card>
            </DropShadow>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgb(249, 249, 249)',
        height: 600,
        paddingTop: 100
    },
    card: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5
    },
    shadowProps: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 2
    },
    input: {
        height: 30,
        width: 200,
        backgroundColor: 'rgb(236, 240, 246)',
        borderStyle: 'solid',
        borderColor: 'rgb(0, 122, 204)',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10
    },
    invalidInput: {
        height: 30,
        width: 200,
        backgroundColor: 'rgb(236, 240, 246)',
        borderStyle: 'solid',
        borderColor: 'rgb(255, 2, 2)',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10
    },
    button: {
        backgroundColor: 'rgb(0, 122, 204)',
        height: 30,
        width: 124,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 35
    },
    inactiveButton: {
        backgroundColor: 'rgb(51, 51, 51)',
        height: 30,
        width: 124,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 35
    }
});

export default SigninScreen
