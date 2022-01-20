import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YozuGames from '../../components/YozuGames';

const StatsScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.yozuContainer} >
                <YozuGames />
            </View>
            <Text>Stats</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(249, 249, 249)',
        alignItems: 'center',
        paddingVertical: 30
    },
    yozuContainer: {
        height: 100,
        width: '100%',
        alignItems: 'center'
    },
})

export default StatsScreen