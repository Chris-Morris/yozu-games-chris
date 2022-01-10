import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

// Import Context
import { AuthContext } from '../../context/authContext';

const SignupScreen = () => {
    const { signIn } = useContext(AuthContext);

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => signIn()}><Text style={styles.signin} >Please Sign Up!</Text></TouchableOpacity>
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

export default SignupScreen;
