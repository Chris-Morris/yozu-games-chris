import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Import Context
import { AuthContext } from '../../context/authContext';

const HomeScreen = ({ navigation }) => {
    const selectedGreeting = useSelector(state => state.Home.greeting);
    const { signOut } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.greeting} >Welcome to Yozu Games!</Text>
            <TouchableOpacity style={styles.play} onPress={() => navigation.navigate('Play')} ><Text style={styles.buttonText} >Higher or Lower</Text></TouchableOpacity>
            <TouchableOpacity style={styles.signOut} onPress={() => signOut()} ><Text style={styles.buttonText} >Sign Out</Text></TouchableOpacity>
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
        backgroundColor: 'rgb(228, 70, 67)',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 100
    },
    greeting: {
        fontSize: 30,
        marginBottom: 30,
        textAlign: 'center'
    },
    play: {
        height: 66,
        width: 200,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20
    },
    signOut: {
        marginTop: 20
    }
});

export default HomeScreen;
