import { View, Text } from 'react-native';
import React, { useContext } from 'react';

// navigate
import { NavigationContainer } from '@react-navigation/native';
// store
import { AuthContext } from '../store/auth-context';
// component
import AuthStack from './AuthStack';
import AuthenticatedStack from './AuthenticatedStack';

export default function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authCtx.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
