import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

const ButtonContainer = () => {
    return (
        <View style={styles.container} >
            <Button title="Higher" pressed={styles.button} role={'increment'} />
            <Button title="Lower" pressed={styles.button} role={'decrement'} />
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
        backgroundColor: 'rgb(245, 106, 104)',
        width: '50%',
        color: 'white'
    }
})

export default ButtonContainer
