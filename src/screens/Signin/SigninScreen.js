import React, { useState, useEffect, useDispatch, useSelector } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { signIn } from '../../redux/AuthSlice';
import YozuGames from '../../components/YozuGames';

const SigninScreen = () => {
    const [username, setUsername] = useState('');
    const [invalidUsername, setInvalidUsername] = useState(false);
    const [password, setPassword] = useState('');
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const dispatch = useDispatch();

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
        usernameStyle = [styles.input, styles.invalidInput];
    };

    let passwordStyle = styles.input;
    if (invalidPassword) {
        passwordStyle = [styles.input, styles.invalidInput];
    };

    return (
        <ScrollView contentContainerStyle={ styles.container } >
            <View style={ styles.yozuContainer } >
                <YozuGames />
            </View>
            <View>
                <Text>Please enter your username</Text>
                <Text>(min 5 characters)</Text>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={ false }
                    clearButtonMode='always'
                    style={ usernameStyle }
                    placeholder="Username"
                    value={ username }
                    onChangeText={ setUsername }
                />
            </View>

            <View>
                <Text>Please enter a valid password</Text>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={ false }
                    clearButtonMode='always'
                    style={ passwordStyle }
                    placeholder="Password"
                    value={ password }
                    onChangeText={ setPassword }
                    secureTextEntry
                />
            </View>

            { showButton ?
                <TouchableOpacity style={ styles.button } onPress={ () => dispatch(signIn()) } testID='enabledButton'><Text style={ { color: 'black', fontSize: 20 } } >Sign In</Text></TouchableOpacity>
                :
                <TouchableOpacity style={ [styles.button, styles.inactiveButton] } onPress={ signinError } testID='disabledButton'><Text style={ { color: 'white', fontSize: 20 } } >Sign In</Text></TouchableOpacity>
            }
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(249, 249, 249)',
        alignItems: 'center',
        paddingVertical: 30
    },
    yozuContainer: {
        height: 100,
        width: '100%',
        alignItems: 'center'
    },
    input: {
        height: 35,
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
        borderColor: 'rgb(255, 2, 2)'
    },
    button: {
        backgroundColor: 'rgb(0, 122, 204)',
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inactiveButton: {
        backgroundColor: 'rgb(51, 51, 51)'
    }
});

export default SigninScreen
