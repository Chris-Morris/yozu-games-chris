import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { resetGame } from '../Play/PlayScreenSlice';

// Import Components
import Stats from '../../components/Stats';
import Card from '../../components/Card';
import ButtonContainer from '../../components/ButtonContainer';

const PlayScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    useFocusEffect(
        useCallback(() => {

            return () => dispatch(resetGame());
        }, [])
    );

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
            <TouchableOpacity style={{ height: 30, backgroundColor: 'white', marginBottom: 20 }} onPress={() => navigation.navigate('EndGame', { destination: "Won" })} ><Text>Won Screen</Text></TouchableOpacity>
            <TouchableOpacity style={{ height: 30, backgroundColor: 'white' }} onPress={() => navigation.navigate('EndGame', { destination: "Won" })} ><Text>Lost Screen</Text></TouchableOpacity>
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
