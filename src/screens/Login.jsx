import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
// services
import { loginUser } from '../services/auth';
// store
import { AuthContext } from '../store/auth-context';

// components
import LoadingOverlay from '../components/UI/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';

export default function Login() {
  const authCtx = useContext(AuthContext);

  const [isLogging, setIsLogging] = useState(false);

  const handleLogin = async ({ email, password }) => {
    setIsLogging(true);
    try {
      const token = await loginUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Authentication Fail', 'Could not Login');
      setIsLogging(false);
    }
  };

  if (isLogging) {
    return <LoadingOverlay message={'Logging...'} />;
  }

  return <AuthContent isLogin onAuthenticate={handleLogin} />;
}
