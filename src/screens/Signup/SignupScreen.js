import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { selectGreeting, changeGreeting } from './SignupScreenSlice';

// Import Context
import { AuthContext } from '../../context/authContext';

const SignupScreen = () => {
    const [greeting, setGreeting] = useState('');
    const dispatch = useDispatch();
    const selectedGreeting = useSelector(state => state.Play.greeting);
    const { signIn } = useContext(AuthContext);

    const handlePress = () => {
        dispatch(changeGreeting(greeting))
    }

    return (
        <View style={styles.container}>
            <Button title="Please Sign In!" onPress={() => signIn()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(228, 70, 67)',
        alignItems: 'center'
    }
});

export default SignupScreen;
