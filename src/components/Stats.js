import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import Stat from './Stat';

const Stats = () => {
    const score = useSelector(state => state.Play.score)
    const highScore = useSelector(state => state.Play.highScore)
    const lastCard = useSelector(state => state.Play.lastCard)

    let lastCardNumber = 0;
    if (lastCard.number) {
        lastCardNumber = lastCard.number;
    }

    return (
        <View style={styles.container} >
            <Stat statName={"High Score"} statNumber={highScore} testID="highScore" acces />
            <Stat statName={"Score"} statNumber={score} testID="score" />
            <Stat statName={"Last Card"} statNumber={lastCardNumber} icon={lastCard.suit} testID="lastCard" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '80%',
        top: 10,
        left: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    text: {
        color: 'white'
    }
})

export default Stats
