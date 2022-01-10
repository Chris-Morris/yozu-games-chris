import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { AuthContext } from '../../context/authContext';

const AccountScreen = () => {
    const { signOut } = useContext(AuthContext);

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => signOut()}><Text style={styles.signout} >Sign Out</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(228, 70, 67)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signout: {
        color: 'white'
    }
});

export default AccountScreen
