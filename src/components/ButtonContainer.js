import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { guess } from '../screens/Play/PlayScreenSlice';

const ButtonContainer = ({ animate }) => {
    const dispatch = useDispatch();
    const [lowerButtonStyle, setLowerButtonStyle] = useState([styles.button, styles.inactive]);
    const [higherButtonStyle, setHigherButtonStyle] = useState([styles.button, styles.inactive]);
    const [lowerButtonTextStyle, setLowerButtonTextStyle] = useState([styles.text, styles.inactiveText]);
    const [higherButtonTextStyle, setHigherButtonTextStyle] = useState([styles.text, styles.inactiveText]);

    const handleGuess = (direction) => {
        animate(direction);

        if (direction === 'lower') {
            setLowerButtonStyle([styles.button, styles.active]);
            setHigherButtonStyle([styles.button, styles.inactive]);
            setLowerButtonTextStyle([styles.text, styles.activeText]);
            setHigherButtonTextStyle([styles.text, styles.inactiveText]);
        } else if (direction === 'higher') {
            setLowerButtonStyle([styles.button, styles.inactive]);
            setHigherButtonStyle([styles.button, styles.active]);
            setLowerButtonTextStyle([styles.text, styles.inactiveText]);
            setHigherButtonTextStyle([styles.text, styles.activeText]);
        }
    }

    return (
        <View style={ styles.container } >
            <TouchableOpacity style={ lowerButtonStyle } onPress={ () => handleGuess('lower') } ><Text style={ lowerButtonTextStyle } >Lower</Text></TouchableOpacity>
            <TouchableOpacity style={ higherButtonStyle } onPress={ () => handleGuess('higher') } ><Text style={ higherButtonTextStyle } >Higher</Text></TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        height: 60,
        alignSelf: 'stretch'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    active: {
        backgroundColor: 'rgb(249, 249, 249)',
        color: 'rgb(245, 106, 104)'
    },
    inactive: {
        backgroundColor: 'rgb(245, 106, 104)',
        color: 'rgb(249, 249, 249)'
    },
    text: {
        fontSize: 16
    },
    activeText: {
        color: 'rgb(245, 106, 104)'
    },
    inactiveText: {
        color: 'rgb(249, 249, 249)'
    }
})

export default ButtonContainer
