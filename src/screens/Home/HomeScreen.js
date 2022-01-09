import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import { selectGreeting, changeGreeting } from './HomeScreenSlice';

const HomeScreen = () => {
    const [greeting, setGreeting] = useState('');
    const dispatch = useDispatch();
    const selectedGreeting = useSelector(state => state.Home.greeting);

    const handlePress = () => {
        dispatch(changeGreeting(greeting))
    }

    return (
        <View>
            <Text>{ selectedGreeting }</Text>
            <TextInput
                onChangeText={ setGreeting }
                value={ greeting }
            />
            <Button title={ 'Press me!' } onPress={ handlePress } />
        </View>
    )
}

const styles = StyleSheet.create({});

export default HomeScreen;
