import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import YozuGames from '../../components/YozuGames';
import { signOut } from '../../redux/AuthSlice';

const ProfileScreen = () => {
    const dispatch = useDispatch();

    return (
        <View style={ styles.container }>
            <View style={ styles.yozuContainer } >
                <YozuGames />
            </View>
            <TouchableOpacity style={ styles.signoutButton } onPress={ () => dispatch(signOut()) }><Text style={ styles.signout } >Sign Out</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(249, 249, 249)',
        alignItems: 'center',
        paddingVertical: 30
    },
    yozuContainer: {
        height: 100,
        width: '100%',
        alignItems: 'center'
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
