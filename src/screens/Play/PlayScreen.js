import React, { useState, useCallback, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { startGame, setEndGame, guess } from './PlayScreenSlice';
import Stat from '../../components/Stat';

// Import Components
import Stats from '../../components/Stats';
import Card from '../../components/Card';
import ButtonContainer from '../../components/ButtonContainer';

const PlayScreen = ({ navigation }) => {
    const [play, setPlay] = useState(false);
    const dispatch = useDispatch();
    const newHighScore = useSelector(state => state.Play.newHighScore);
    const highScore = useSelector(state => state.Play.highScore);

    // Deck State
    const deck = useSelector(state => state.Play.cardDeck);

    useFocusEffect(
        useCallback(() => {
            dispatch(setEndGame(true));
            setPlay(false);
        }, [])
    )

    const handleStartPlay = () => {
        setPlay(true);
        dispatch(startGame());
    };

    const topCard = useRef(new Animated.Value(0)).current;

    const animate = (direction) => {
        Animated.timing(
            topCard,
            {
                toValue: 600,
                duration: 1000,
                useNativeDriver: true
            }
        ).start(() => {
            // Splice Card Deck here
            dispatch(guess(direction));
            console.log(deck.length);

            if (deck.length <= 1) {
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

    return (
        <View style={ styles.container }>
            { play ? (
                <>
                    <Stats />
                    <View
                        style={ styles.deckContainer }
                    />
                    <View style={ styles.deck } >
                        { console.log("\n\n\n") }
                        { deck.map((card, i) => {
                            console.log(card);

                            if (i === 0) {
                                return (
                                    <Animated.View key={ i } style={ { transform: [{ translateX: topCard }] } }>
                                        <Card card={ card } />
                                    </Animated.View>
                                )
                            }

                            if (i > 0) {
                                return (
                                    <Card key={ i } card={ card } />
                                )
                            }
                        }).reverse() }
                    </View>
                    { deck.length > 1 ?
                        <ButtonContainer animate={ animate } />
                        :
                        <Text style={ styles.gameComplete } >Let's see how you did!</Text>
                    }

                </>
            ) : (
                <View style={ styles.startGameContainer } >
                    <Stat statName={ "High Score" } statNumber={ highScore } />
                    <TouchableOpacity style={ styles.startGameButton } onPress={ handleStartPlay } ><Text style={ styles.startGameText } >Start Game</Text></TouchableOpacity>
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
    deck: {
        position: 'absolute',
        top: 250,
        width: '100%',
        zIndex: -1
    },
    gameComplete: {
        position: 'absolute',
        height: 50,
        bottom: 0
    }
});

export default PlayScreen;
