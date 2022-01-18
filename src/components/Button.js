import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { guess } from '../screens/Play/PlayScreenSlice';

const Button = ({ title, style, role }) => {
    const dispatch = useDispatch();

    const handleGuess = (direction) => {
        dispatch(guess(direction));
    }

    if (role === 'increment') {
        return (
            <>
                <TouchableOpacity style={style} onPress={() => handleGuess('higher')} ><Text style={styles.text} >{title}</Text></TouchableOpacity>
            </>
        )
    } else if (role === 'decrement') {
        return (
            <>
                <TouchableOpacity style={style} onPress={() => handleGuess('lower')} ><Text style={styles.text} >{title}</Text></TouchableOpacity>
            </>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
})

export default Button
