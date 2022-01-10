import React, { useContext } from 'react';
import { View, Button } from 'react-native';

import { AuthContext } from '../../context/authContext';

const AccountScreen = () => {
    const { signOut } = usecontext(AuthContext);

    return (
        <View>
            <Button title="Sign Out" onPress={() => signOut()} />
        </View>
    )
}

export default AccountScreen
