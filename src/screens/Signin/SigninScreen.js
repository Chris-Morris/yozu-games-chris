import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { selectGreeting, changeGreeting } from './SigninScreenSlice';

// Import Components
import Stats from '../../components/Stats';
import Divider from '../../components/Divider';
import Card from '../../components/Card';
import ButtonContainer from '../../components/ButtonContainer';

const SigninScreen = ({ navigation }) => {
    const [greeting, setGreeting] = useState('');
    const dispatch = useDispatch();
    const selectedGreeting = useSelector(state => state.Play.greeting);

    const handlePress = () => {
        dispatch(changeGreeting(greeting))
    }

    const signinAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        navigation.navigate('mainFlow');
    }

    return (
        <View style={styles.container}>
            <Button title="Please Sign In!" onPress={signinAsync} />
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

export default SigninScreen;
