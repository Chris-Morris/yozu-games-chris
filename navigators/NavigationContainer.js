import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as SecureStore from 'expo-secure-store';

// Import Navigation libs
import { NavigationContainer } from '@react-navigation/native';

// Import Navigators
import GameStack from './GameStack';
import AuthTabs from './AuthTabs';

// Import Store
import { restoreToken } from '../src/redux/AuthSlice';

const NavContainer = () => {
    const token = useSelector(state => state.Auth.userToken);
    const dispatch = useDispatch();

    useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await SecureStore.getItemAsync('userToken');
            } catch (e) {
                console.log(e);
            };

            dispatch(restoreToken(userToken));
        };

        bootstrapAsync();
    }, []);

    return (
        <NavigationContainer>
            { token ?
                <GameStack />
                :
                <AuthTabs />
            }
        </NavigationContainer>
    )
}

export default NavContainer;