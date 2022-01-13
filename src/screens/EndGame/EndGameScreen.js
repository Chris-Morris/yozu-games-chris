import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { setEndGame, resetGame, resetNewHighScore } from '../Play/PlayScreenSlice';

const EndGameScreen = ({ route, navigation }) => {
    const { destination } = route.params;
    const dispatch = useDispatch();

    const score = useSelector(state => state.Play.score);

    useFocusEffect(
        useCallback(() => {
            return () => {
                dispatch(resetGame());
                dispatch(resetNewHighScore());
                dispatch(setEndGame(false));
            }
        }, [])
    );

    return (
        <View style={styles.pageContainer} >
            <View style={styles.block} ></View>
            <View style={styles.headerContainer} >
                {destination === 'Won' ?
                    <>
                        <Text style={styles.header} >Congratulations!</Text>
                        <Text style={styles.subHeader} >New Highest Score</Text>
                    </>
                    :
                    <>
                        <Text style={styles.header} >Sorry, you've lost!</Text>
                        <Text style={styles.subHeader} >Bad luck this time</Text>
                    </>
                }
            </View>
            <View style={styles.circleContainer} >
                {destination === 'Won' ?
                    <>
                        <Text style={styles.score} >{score}</Text>
                        <View style={styles.innerCircle} ></View>
                        <View style={styles.mainCircle} ></View>
                    </>
                    :
                    <>
                        <Text style={styles.score} >{score}</Text>
                        <View style={styles.innerCircle} ></View>
                        <View style={styles.mainCircle} ></View>
                        <View style={styles.outerCircle} ></View>
                    </>
                }
            </View>
            <TouchableOpacity style={styles.backToMenuButton} onPress={() => navigation.navigate('Play')} ><Text style={styles.backToMenuText} >Back to Menu</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    block: {
        height: 100,
        width: '100%',
        backgroundColor: '#B7B7B7',
        opacity: 0.7
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '100%'
    },
    header: {
        color: '#FBC546',
        fontSize: 24,
        fontWeight: 'bold'
    },
    subHeader: {
        fontSize: 16
    },
    circleContainer: {
        paddingTop: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    score: {
        position: 'absolute',
        zIndex: 3,
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
    },
    innerCircle: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        zIndex: 2
    },
    mainCircle: {
        position: 'absolute',
        backgroundColor: '#FFD467',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        zIndex: 1
    },
    outerCircle: {
        position: 'absolute',
        backgroundColor: '#FFD467',
        opacity: 0.2,
        width: 180,
        height: 180,
        borderRadius: 180 / 2,
        zIndex: 0
    },
    backToMenuButton: {
        height: 80,
        width: '100%',
        backgroundColor: '#F56A68',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backToMenuText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default EndGameScreen
