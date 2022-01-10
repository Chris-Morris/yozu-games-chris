import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { selectGreeting, changeGreeting } from './SigninScreenSlice';

// Import Components
import { AuthContext } from '../../context/authContext';

const SigninScreen = ({ navigation }) => {
    const { signIn } = useContext(AuthContext);

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => signIn()}><Text style={styles.signin} >Please Sign In!</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(228, 70, 67)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signin: {
        color: 'white'
    }
});

export default SigninScreen;
