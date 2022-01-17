import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YozuGames from '../../components/YozuGames';

const StatsScreen = () => {
    return (
        <View style={styles.container} >
            <YozuGames />
            <Text>Stats</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(249, 249, 249)',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default StatsScreen