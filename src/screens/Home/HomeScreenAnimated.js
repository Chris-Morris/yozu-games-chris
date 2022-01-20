import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import FotAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { resetHighScore, resetGame } from '../Play/PlayScreenSlice';

const HomeScreenAnimated = ({ navigation }) => {
    const dispatch = useDispatch();

    const animatedBox1 = new Animated.Value(-600);
    const animatedBox2 = new Animated.Value(-600);
    const animatedBox3 = new Animated.Value(-600);
    const animatedBox4 = new Animated.Value(-600);

    useFocusEffect(
        useCallback(() => {
            animate();
            dispatch(resetGame());
            dispatch(resetHighScore());
        }, [])
    );

    const animate = () => {
        Animated.parallel([
            Animated.timing(
                animatedBox1,
                {
                    toValue: 250,
                    duration: 200,
                    easing: Easing.inOut
                }
            ),
            Animated.timing(
                animatedBox2,
                {
                    toValue: 320,
                    duration: 200,
                    easing: Easing.inOut,
                    delay: 50
                }
            ),
            Animated.timing(
                animatedBox3,
                {
                    toValue: 390,
                    duration: 200,
                    easing: Easing.inOut,
                    delay: 100
                }
            ),
            Animated.timing(
                animatedBox4,
                {
                    toValue: 460,
                    duration: 200,
                    easing: Easing.inOut,
                    delay: 150
                }
            )
        ]).start();
    }

    return (
        <View style={ styles.container }>
            <FotAwesome5 name="dice" color="#FEC145" size={ 30 } />
            <Text style={ styles.greeting } >Yozu Games</Text>
            <View style={ styles.gameContainer } >
                <TouchableOpacity style={ [styles.gameButton, styles.higherLower, { bottom: animatedBox1 }] } onPress={ () => navigation.navigate('Play') } ><Text style={ styles.buttonText } >Higher or Lower</Text></TouchableOpacity>
                <TouchableOpacity style={ [styles.gameButton, styles.simonSays, { bottom: animatedBox2 }] } onPress={ () => alert('Sorry, Simon Says is currently in development.') } ><Text style={ styles.buttonText } >Simon Says</Text></TouchableOpacity>
                <TouchableOpacity style={ [styles.gameButton, styles.memory, { bottom: animatedBox3 }] } onPress={ () => alert('Sorry, Memory is currently in development.') } ><Text style={ styles.buttonText } >Memory</Text></TouchableOpacity>
                <TouchableOpacity style={ [styles.gameButton, styles.countdownLetters, { bottom: animatedBox4 }] } onPress={ () => alert('Sorry, Countdown Letters is currently in development.') } ><Text style={ styles.buttonText } >Countdown Letters</Text></TouchableOpacity>
            </View>
        </View>
    )
}

HomeScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(249, 249, 249)',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 30
    },
    gameContainer: {
        height: 320,
        justifyContent: 'space-between'
    },
    greeting: {
        fontSize: 30,
        marginBottom: 30,
        textAlign: 'center',
        color: '#FEC145'
    },
    gameButton: {
        height: 66,
        width: 200,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    higherLower: {
        backgroundColor: '#F56A68'

    },
    simonSays: {
        backgroundColor: '#66E6D7'
    },
    memory: {
        backgroundColor: '#9742DD'
    },
    countdownLetters: {
        backgroundColor: '#FAC446'
    },
    buttonText: {
        fontSize: 20
    },
    signOut: {
        marginTop: 20
    }
});

export default HomeScreenAnimated;
