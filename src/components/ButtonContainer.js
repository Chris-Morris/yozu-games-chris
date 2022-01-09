import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from './Button';

const ButtonContainer = () => {
    return (
        <View style={ styles.container } >
            <Button title="Higher" pressed={ styles.button } />
            <Button title="Lower" pressed={ styles.button } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignSelf: 'stretch'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(0245, 106, 104)',
        width: '50%',
        color: 'white'
    }
})

export default ButtonContainer
