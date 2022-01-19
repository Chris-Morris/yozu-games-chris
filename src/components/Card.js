import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropShadow from "react-native-drop-shadow";

const Card = ({ card }) => {

    let color = 'red'
    const size = 30
    if (card) {
        if (card.suit == 'club' || card.suit == 'spade') {
            color = 'black';
        } else {
            color = 'red'
        };
    };

    return (
        <DropShadow style={styles.shadowProp} >
            <View style={styles.card} >
                <View style={styles.topImage} ><Icon name={`cards-${card.suit}`} color={color} size={size} /></View>
                <View style={styles.numberContainer} ><Text testID='cardNumber' style={styles.number} >{card.number}</Text></View>
                <View style={styles.bottomImage} ><Icon name={`cards-${card.suit}`} color={color} size={size} style={{ transform: [{ rotateX: '180deg' }] }} /></View>
            </View>
        </DropShadow >
    )
}

const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        height: 320,
        width: '70%',
        backgroundColor: 'rgb(249, 249, 249)',
        justifyContent: 'space-between',
        borderRadius: 8,
        borderTopColor: '#D3D3D3',
        borderTopWidth: 1
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
        marginTop: 10
    }
})

export default Card