import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({ image, number }) => {
    return (
        <View style={ styles.card } >
            <View style={ styles.topImage } ><Text>Image</Text></View>
            <View style={ styles.numberContainer } ><Text style={ styles.number } >{ number }</Text></View>
            <View style={ styles.bottomImage } ><Text >Image</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: '60%',
        width: '70%',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        borderRadius: 5,
        marginBottom: 50
    },
    topImage: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        left: 10,
        top: 10
    },
    numberContainer: {
        width: '100%',
        alignItems: 'center'
    },
    number: {
        fontSize: 60
    },
    bottomImage: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        right: 10,
        bottom: 10
    }
})

export default Card