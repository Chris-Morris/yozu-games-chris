import React from 'react';
import { View, StyleSheet } from 'react-native';

import Stat from './Stat';

const Stats = () => {
    return (
        <View style={styles.container} >
            <Stat statName={"High Score"} statNumber={53} />
            <Stat statName={"Score"} statNumber={53} />
            <Stat statName={"Last Card"} statNumber={53} icon />
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
