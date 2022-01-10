import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { selectGreeting, changeGreeting } from './SignupScreenSlice';

// Import Components
import Stats from '../../components/Stats';
import Divider from '../../components/Divider';
import Card from '../../components/Card';
import ButtonContainer from '../../components/ButtonContainer';

const SignupScreen = () => {
    const [greeting, setGreeting] = useState('');
    const dispatch = useDispatch();
    const selectedGreeting = useSelector(state => state.Play.greeting);

    const handlePress = () => {
        dispatch(changeGreeting(greeting))
    }

    return (
        <View style={styles.container}>
            <Stats style={styles.stats} />
            <Divider />
            <Card number="hello?" />
            <ButtonContainer />
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
