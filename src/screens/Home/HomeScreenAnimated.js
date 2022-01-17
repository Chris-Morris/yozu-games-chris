import React, { useCallback, useEffect, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import FotAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { resetHighScore, resetGame } from '../Play/PlayScreenSlice';

const HomeScreenAnimated = ({ navigation }) => {
    const dispatch = useDispatch();

    const animatedBox1 = useRef(new Animated.Value(600)).current;
    const animatedBox2 = useRef(new Animated.Value(600)).current;
    const animatedBox3 = useRef(new Animated.Value(600)).current;
    const animatedBox4 = useRef(new Animated.Value(600)).current;

    const animate = () => {
        Animated.parallel([
            Animated.timing(
                animatedBox1,
                {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                animatedBox2,
                {
                    toValue: 5,
                    duration: 1000,
                    delay: 100,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                animatedBox3,
                {
                    toValue: 10,
                    duration: 1000,
                    delay: 200,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                animatedBox4,
                {
                    toValue: 15,
                    duration: 1000,
                    delay: 300,
                    useNativeDriver: true
                }
            )
        ]).start();
    }

    useFocusEffect(
        useCallback(() => {
            animate();
            dispatch(resetGame());
            dispatch(resetHighScore());
            return () => {
                animatedBox1.setValue(600);
                animatedBox2.setValue(600);
                animatedBox3.setValue(600);
                animatedBox4.setValue(600);
            }
        }, [])
    );

    return (
        <View style={styles.container}>
            <FotAwesome5 name="dice" color="#FEC145" size={30} />
            <Text style={styles.greeting} >Yozu Games</Text>
            <View style={styles.gameContainer} >
                <Animated.View style={{ transform: [{ translateY: animatedBox1 }] }} ><TouchableOpacity style={[styles.gameButton, styles.higherLower]} onPress={() => navigation.navigate('Play')} ><Text style={styles.buttonText} >Higher or Lower</Text></TouchableOpacity></Animated.View>
                <Animated.View style={{ transform: [{ translateY: animatedBox2 }] }} ><TouchableOpacity style={[styles.gameButton, styles.simonSays]} onPress={() => alert('Sorry, Simon Says is currently in development.')} ><Text style={styles.buttonText} >Simon Says</Text></TouchableOpacity></Animated.View>
                <Animated.View style={{ transform: [{ translateY: animatedBox3 }] }} ><TouchableOpacity style={[styles.gameButton, styles.memory]} onPress={() => alert('Sorry, Memory is currently in development.')} ><Text style={styles.buttonText} >Memory</Text></TouchableOpacity></Animated.View>
                <Animated.View style={{ transform: [{ translateY: animatedBox4 }] }} ><TouchableOpacity style={[styles.gameButton, styles.countdownLetters]} onPress={() => alert('Sorry, Countdown Letters is currently in development.')} ><Text style={styles.buttonText} >Countdown Letters</Text></TouchableOpacity></Animated.View>
            </View>
        </View>
    )
}

HomeScreenAnimated.navigationOptions = () => {
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
