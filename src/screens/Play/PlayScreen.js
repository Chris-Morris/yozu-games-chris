import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { selectGreeting, changeGreeting } from './PlayScreenSlice';
import { Divider } from 'react-native-elements';

// Import Components
import Stats from '../../components/Stats';
import Card from '../../components/Card';
import ButtonContainer from '../../components/ButtonContainer';

const PlayScreen = ({ navigation }) => {
    const [greeting, setGreeting] = useState('');
    const dispatch = useDispatch();
    const selectedGreeting = useSelector(state => state.Home.greeting);

    const handlePress = () => {
        dispatch(changeGreeting(greeting))
    }

    return (
        <View style={styles.container}>
            <Stats style={styles.stats} />
            {/* <Divider width={5} color={'black'} /> */}
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

PlayScreen.navigationOptions = () => {
    return {
        tabBarVisible: false
    };
};

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
