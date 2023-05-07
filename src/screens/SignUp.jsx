import { View, Text, Alert } from 'react-native';
import React, { useContext, useState } from 'react';

// services
import { createUser } from '../services/auth';

// store
import { AuthContext } from '../store/auth-context';

// components
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlay';

export default function SignUp() {
  const authCtx = useContext(AuthContext);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleSignUp = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Authentication Fail', 'Could not create user');
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message='Creating user...' />;
  }

  return <AuthContent onAuthenticate={handleSignUp} />;
}
