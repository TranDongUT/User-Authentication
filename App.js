import { StatusBar } from 'expo-status-bar';

// navigate
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// store
import AuthContextProvider, { AuthContext } from './src/store/auth-context';

// screens

import Navigation from './src/navigation/Navigation';
import { useContext, useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Root() {
  const authCtx = useContext(AuthContext);

  const [isTryLogin, setIsTryLogin] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryLogin(false);
    };

    fetchToken();
  }, []);

  if (isTryLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
