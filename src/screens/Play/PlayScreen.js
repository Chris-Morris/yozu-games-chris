import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { resetGame } from '../Play/PlayScreenSlice';

// Import Components
import Stats from '../../components/Stats';
import Card from '../../components/Card';
import ButtonContainer from '../../components/ButtonContainer';

const PlayScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const endGame = useSelector(state => state.Play.endGame);
    const newHighScore = useSelector(state => state.Play.newHighScore);

    if (endGame) {
        if (newHighScore) {
            navigation.navigate('EndGame', { destination: "Won" });
        } else {
            navigation.navigate('EndGame', { destination: "Lost" });
        };
    };

    // useFocusEffect(
    //     useCallback(() => {
    //         dispatch(resetGame())
    //     }, [])
    // );

    return (
        <View style={styles.container}>
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
    }
});

export default PlayScreen;
