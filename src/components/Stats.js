import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Stats = () => {
    return (
        <View style={ styles.container } >
            <Text style={ styles.text } >High Score</Text>
            <Text style={ styles.text } >Score</Text>
            <Text style={ styles.text } >Last Card</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        height: 200,
        alignSelf: 'stretch',
        paddingHorizontal: 30
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(245, 106, 104)'
    },
    text: {
        color: 'white'
    }
})

export default Stats
