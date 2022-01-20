import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YozuGames from '../../components/YozuGames';

const AwardsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.yozuContainer} >
                <YozuGames />
            </View>
            <Text>Awards</Text>
            {/* <View style={styles.gameContainer} >
                <Animated.View style={{ transform: [{ translateY: animatedBox1 }] }} ><TouchableOpacity style={[styles.gameButton, styles.higherLower]} onPress={() => navigation.navigate('Play')} ><Text style={styles.buttonText} >Higher or Lower</Text></TouchableOpacity></Animated.View>
                <Animated.View style={{ transform: [{ translateY: animatedBox2 }] }} ><TouchableOpacity style={[styles.gameButton, styles.simonSays]} onPress={() => alert('Sorry, Simon Says is currently in development.')} ><Text style={styles.buttonText} >Simon Says</Text></TouchableOpacity></Animated.View>
                <Animated.View style={{ transform: [{ translateY: animatedBox3 }] }} ><TouchableOpacity style={[styles.gameButton, styles.memory]} onPress={() => alert('Sorry, Memory is currently in development.')} ><Text style={styles.buttonText} >Memory</Text></TouchableOpacity></Animated.View>
                <Animated.View style={{ transform: [{ translateY: animatedBox4 }] }} ><TouchableOpacity style={[styles.gameButton, styles.countdownLetters]} onPress={() => alert('Sorry, Countdown Letters is currently in development.')} ><Text style={styles.buttonText} >Countdown Letters</Text></TouchableOpacity></Animated.View>
            </View> */}
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

export default AwardsScreen
