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
            <Stat statName={"High Score"} statNumber={highScore} />
            <Stat statName={"Score"} statNumber={score} />
            <Stat statName={"Last Card"} statNumber={lastCardNumber} icon={lastCard.suit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingHorizontal: 30
    },
    text: {
        color: 'white'
    }
})

export default Stats
