import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { updateCurrentCard } from '../screens/Play/PlayScreenSlice';

const Button = ({ title, pressed, role }) => {
    const dispatch = useDispatch();

    if (role === 'increment') {
        return (
            <>
                <TouchableOpacity style={pressed} onPress={() => dispatch(updateCurrentCard())} ><Text style={styles.text} >{title}</Text></TouchableOpacity>
            </>
        )
    } else if (role === 'decrement') {
        return (
            <>
                <TouchableOpacity style={pressed}><Text style={styles.text} >{title}</Text></TouchableOpacity>
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
