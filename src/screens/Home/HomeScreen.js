import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FotAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Import Context
import { AuthContext } from '../../context/authContext';

const HomeScreen = ({ navigation }) => {
    const selectedGreeting = useSelector(state => state.Home.greeting);
    const { signOut } = useContext(AuthContext);

    // return (
    //     <View style={styles.container}>
    //         <Text style={styles.greeting} >Welcome to Yozu Games!</Text>
    //         <TouchableOpacity style={styles.play} onPress={() => navigation.navigate('Play')} ><Text style={styles.buttonText} >Higher or Lower</Text></TouchableOpacity>
    //         <TouchableOpacity style={styles.signOut} onPress={() => signOut()} ><Text style={styles.buttonText} >Sign Out</Text></TouchableOpacity>
    //     </View>
    // )

    return (
        <View style={styles.container}>
            <FotAwesome5 name="dice" color="#FEC145" size={30} />
            <Text style={styles.greeting} >Yozu Games</Text>
            <View style={styles.gameContainer} >
                <TouchableOpacity style={styles.higherLower} onPress={() => navigation.navigate('Play')} ><Text style={styles.buttonText} >Higher or Lower</Text></TouchableOpacity>
                <TouchableOpacity style={styles.simonSays} onPress={() => alert('Sorry, Simon Says is currently in development.')} ><Text style={styles.buttonText} >Simon Says</Text></TouchableOpacity>
                <TouchableOpacity style={styles.memory} onPress={() => alert('Sorry, Memory is currently in development.')} ><Text style={styles.buttonText} >Memory</Text></TouchableOpacity>
                <TouchableOpacity style={styles.countdownLetters} onPress={() => alert('Sorry, Countdown Letters is currently in development.')} ><Text style={styles.buttonText} >Countdown Letters</Text></TouchableOpacity>
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
    higherLower: {
        backgroundColor: '#F56A68',
        height: 66,
        width: 200,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    simonSays: {
        backgroundColor: '#66E6D7',
        height: 66,
        width: 200,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    memory: {
        backgroundColor: '#9742DD',
        height: 66,
        width: 200,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    countdownLetters: {
        backgroundColor: '#FAC446',
        height: 66,
        width: 200,
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
