import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { startGame } from './PlayScreenSlice';

// Import Components
import Stats from '../../components/Stats';
import Card from '../../components/Card';
import ButtonContainer from '../../components/ButtonContainer';

const PlayScreen = ({ navigation }) => {
    const [play, setPlay] = useState(false);
    const dispatch = useDispatch();
    const currentCard = useSelector(state => state.Play.currentCard)
    const endGame = useSelector(state => state.Play.endGame);
    const newHighScore = useSelector(state => state.Play.newHighScore);

    useFocusEffect(
        useCallback(() => {
            setPlay(false)
            return setPlay(false);
        }, [])
    );

    const handleStartPlay = () => {
        setPlay(true);
        dispatch(startGame());
    };

    if (endGame) {
        if (newHighScore) {
            navigation.navigate('EndGame', { destination: "Won" });
        } else {
            navigation.navigate('EndGame', { destination: "Lost" });
        };
    };

    return (
        <View style={styles.container}>
            {play ? (
                <>
                    <Stats style={styles.stats} />
                    <View
                        style={{
                            borderBottomColor: '#c0c0c0',
                            borderBottomWidth: 1.5,
                            width: '70%',
                            marginBottom: 15
                        }}
                    />

                    <Card number={5} />
                    <ButtonContainer />
                </>
            ) : (
                <TouchableOpacity style={styles.startGameButton} onPress={handleStartPlay} ><Text style={styles.startGameText} >Start Game</Text></TouchableOpacity>
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
        justifyContent: 'space-between',
        paddingTop: 10
    },
    startGameButton: {
        marginTop: 250,
        height: 60,
        width: 180,
        backgroundColor: 'rgb(249, 249, 249)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startGameText: {
        fontSize: 22
    }
});

export default PlayScreen;
