import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropShadow from "react-native-drop-shadow";
import { startGame } from '../screens/Play/PlayScreenSlice';

const Card = () => {
    // Selectors
    const currentCard = useSelector(state => state.Play.currentCard)

    let color = 'red'
    const size = 30
    if (currentCard) {
        if (currentCard.suit == 'club' || currentCard.suit == 'spade') {
            color = 'black';
        } else {
            color = 'red'
        };
    };

    const dispatch = useDispatch();

    return (
        <DropShadow style={styles.shadowProp} >
            <View style={styles.card} >
                <View style={styles.topImage} ><Icon name={`cards-${currentCard.suit}`} color={color} size={size} /></View>
                <View style={styles.numberContainer} ><Text style={styles.number} >{currentCard.number}</Text></View>
                <View style={styles.bottomImage} ><Icon name={`cards-${currentCard.suit}`} color={color} size={size} style={{ transform: [{ rotateY: '180deg' }] }} /></View>
            </View>
        </DropShadow >
    )
}

const styles = StyleSheet.create({
    card: {
        height: 320,
        width: '70%',
        backgroundColor: 'rgb(249, 249, 249)',
        justifyContent: 'space-between',
        borderRadius: 8,
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
    welcome: {
        fontSize: 50
    },
    number: {
        fontSize: 100,
        fontWeight: 'bold'
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
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    }
})

export default Card