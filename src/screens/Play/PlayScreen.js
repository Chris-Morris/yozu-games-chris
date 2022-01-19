import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { startGame, setTurn, setLastCard, setEndGame } from './PlayScreenSlice';
import Stat from '../../components/Stat';
// import suitsArray from './suitsArray';

// Import Components
import Stats from '../../components/Stats';
import Card from '../../components/Card';
import ButtonContainer from '../../components/ButtonContainer';

const PlayScreen = ({ navigation }) => {
    const [index, setIndex] = useState(1);
    const dispatch = useDispatch();
    const newHighScore = useSelector(state => state.Play.newHighScore);
    const highScore = useSelector(state => state.Play.highScore);

    // Deck State
    let deck = [];
    const turn = useSelector(state => state.Play.turn);
    const gameStarted = useSelector(state => state.Play.gameStarted);
    const [localTurn, setLocalTurn] = useState(-1);
    console.log('Index Start: ', index);
    console.log('Turn: ', turn);
    console.log('Local Turn: ', localTurn);
    console.log(deck);

    const suits = ['heart', 'diamond', 'spade', 'club'];
    const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', 'jack', 'queen', 'king', 'ace'];
    for (let i = 0; i < 10; i++) {
        const suitIndex = Math.floor(Math.random() * (suits.length - 0) + 0);
        const suit = suits[suitIndex];

        const numberIndex = Math.floor(Math.random() * (numbers.length - 0) + 0);
        const number = numbers[numberIndex];

        deck.push({ suit, number, id: i });
    }

    const handleStartPlay = () => {
        dispatch(startGame());
        console.log('Game Started');
    };

    if (turn > 10) {
        setTimeout(() => {
            if (newHighScore) {
                navigation.navigate('EndGame', { destination: "Won" });
            } else {
                navigation.navigate('EndGame', { destination: "Lost" });
            };
        }, 1000);
    };

    const topCard = useRef(new Animated.Value(0)).current;

    const animate = () => {
        Animated.timing(
            topCard,
            {
                toValue: 600,
                duration: 1000,
                useNativeDriver: true
            }
        ).start(() => {
            setIndex(index + 1);
            console.log('Deck Length: ', deck.length)
            console.log('Index after animation: ', index);
            if (turn === 10) {
                console.log('End Game');
                setLocalTurn(-1);
                setEndGame(true);
                setTimeout(() => {
                    if (newHighScore) {
                        navigation.navigate('EndGame', { destination: "Won" });
                    } else {
                        navigation.navigate('EndGame', { destination: "Lost" });
                    };
                }, 1000);
            }
        })
    }

    if (turn > localTurn) {
        setLocalTurn(turn);
        animate();
    }

    return (
        <View style={styles.container}>
            {gameStarted ? (
                <>
                    <Stats />
                    <View
                        style={styles.deckContainer}
                    />
                    <View style={styles.cardDeck} >
                        {deck.map((card, i) => {
                            if (i < turn) {
                                return null
                            };

                            if (i === turn) {
                                return (
                                    <Animated.View key={card.id} style={{ transform: [{ translateX: topCard }] }}>
                                        <Card card={card} />
                                    </Animated.View>
                                )
                            }

                            if (i > turn) {
                                return (
                                    <Card key={card.id} card={card} />
                                )
                            }
                        }).reverse()}
                    </View>
                    <ButtonContainer />
                </>
            ) : (
                <View style={styles.startGameContainer} >
                    <Stat statName={"High Score"} statNumber={highScore} />
                    <TouchableOpacity style={styles.startGameButton} onPress={handleStartPlay} ><Text style={styles.startGameText} >Start Game</Text></TouchableOpacity>
                </View>
            )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(228, 70, 67)',
        alignItems: 'center',
        paddingTop: 10
    },
    startGameContainer: {
        height: 200,
        marginTop: 100,
        justifyContent: 'space-between'
    },
    startGameButton: {
        height: 60,
        width: 180,
        backgroundColor: 'rgb(249, 249, 249)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startGameText: {
        fontSize: 22
    },
    deckContainer: {
        position: 'absolute',
        top: 55,
        borderBottomColor: '#c0c0c0',
        borderBottomWidth: 1.5,
        width: '70%',
        marginBottom: 15
    },
    cardDeck: {
        position: 'absolute',
        top: 250,
        width: '100%',
        zIndex: -1
    }
});

export default PlayScreen;
