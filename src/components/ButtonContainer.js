import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

const ButtonContainer = () => {
    const [lowerButtonActive, setLowerButtonActive] = useState(false);
    const [higherButtonActive, setHigherButtonActive] = useState(false);

    let lowerButtonStyle;
    let higherButtonStyle;
    if (lowerButtonActive) {
        lowerButtonStyle = [styles.button, styles.active];
        higherButtonStyle = [styles.button, styles.inactive];
    } else if (higherButtonActive) {
        lowerButtonStyle = [styles.button, styles.inactive];
        higherButtonStyle = [styles.button, styles.active];
    };

    return (
        <View style={styles.container} >
            <Button title="Lower" style={lowerButtonStyle} role={'decrement'} handleClick={setLowerButtonActive} />
            <Button title="Higher" style={higherButtonStyle} role={'increment'} handleClick={setHigherButtonActive} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
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
    }
})

export default ButtonContainer
