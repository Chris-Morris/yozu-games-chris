import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import YozuGames from '../../components/YozuGames';

import { AuthContext } from '../../context/authContext';

const ProfileScreen = () => {
    const { signOut } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <YozuGames />
            <TouchableOpacity style={styles.signoutButton} onPress={() => signOut()}><Text style={styles.signout} >Sign Out</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(249, 249, 249)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signoutButton: {
        height: 66,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    signout: {
        color: 'black',
        fontSize: 20
    }
});

export default ProfileScreen
