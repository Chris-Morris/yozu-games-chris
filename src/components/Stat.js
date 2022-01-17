import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stat = ({ statName, statNumber, icon }) => {

    return (
        icon ?
            <View style={styles.statContainer} >
                <Text style={styles.statName} >{statName}</Text>
                <View style={styles.withIcon} >
                    <Text style={styles.statName} >{statNumber}</Text>
                    <Icon name={`cards-${icon}`} style={styles.statIcon} />
                </View>
            </View >
            :
            <View style={styles.statContainer} >
                <Text style={styles.statName} >{statName}</Text>
                <Text style={styles.statName} >{statNumber}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    statContainer: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    statName: {
        fontSize: 18,
        color: 'white'
    },
    statIcon: {
        color: 'white'
    },
    withIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 40
    }
})

export default Stat;
