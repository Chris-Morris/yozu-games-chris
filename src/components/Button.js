import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ title, pressed }) => {
    return (
        <>
            <TouchableOpacity style={ pressed }><Text style={ styles.text } >{ title }</Text></TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
})

export default Button
