import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const index = () => {
    const [loggedInUser, setloggedInUser] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const subscription = async () => {
            const token = SecureStore.getItem("accessToken");
            setloggedInUser(token ? true : false);
        }
        subscription();
        
    }, []);
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default index