import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = ({ image, number }) => {
    const color = 'red'
    const size = 30

    return (
        <View style={styles.card} >
            <View style={styles.topImage} ><Icon name="heart" color={color} size={size} /></View>
            <View style={styles.numberContainer} ><Text style={styles.number} >{number}</Text></View>
            <View style={styles.bottomImage} ><Icon name="heart" color={color} size={size} style={{ transform: [{ rotateY: '180deg' }] }} /></View>
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
    },
    image: {
        height: 20,
        width: 20,
        color: 'red'
    },
    color: {
        color: 'red'
    }
})

export default Card