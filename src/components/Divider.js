import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Divider = () => {
    return (
        <Text style={ styles.divider } ></Text>
    )
}

const styles = StyleSheet.create({
    divider: {
        height: 3,
        width: 200,
        color: 'rgb(10, 10, 10)'
    }
})

export default Divider