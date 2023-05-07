import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

// navigate
import { useNavigation, useRoute } from '@react-navigation/native';

// constants
import { Colors } from '../../constants/styles';
// components
import Button from '../UI/Button';
import AuthForm from './AuthForm';

export default function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const handleSubmit = (credential) => {
    let { email, password, confirmEmail, confirmPassword } = credential;

    email = email?.trim();
    confirmEmail = confirmEmail?.trim();

    const emailIsValid = email.includes('@');
    const confirmEmailIsValid = confirmEmail === email;
    const passwordIsValid = password.length > 6;
    const confirmPasswordIsValid = confirmPassword === password;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!confirmEmailIsValid || !confirmPasswordIsValid))
    ) {
      Alert.alert('Error', 'Check your input validation', [
        { text: 'Okey', style: 'default' },
      ]);
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmEmail: !emailIsValid || !confirmEmailIsValid,
        confirmPassword: !passwordIsValid || !confirmPasswordIsValid,
      });
      return;
    }

    return onAuthenticate({ email, password });
  };

  const handleSwitchAuthMode = () => {
    if (isLogin) {
      navigation.replace('Signup');
    } else {
      navigation.replace('Login');
    }
  };

  const route = useRoute();

  return (
    <View style={styles.container}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={handleSubmit}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <Button flat onPress={handleSwitchAuthMode}>
          {isLogin ? 'Create a new user' : 'Log in instead'}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary800,
    marginHorizontal: 32,
    marginTop: 64,
    padding: 16,
    borderRadius: 6,
    elevation: 4,
    shadowColor: '#333',
    shadowOpacity: 0.75,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 6,
  },

  buttons: {
    marginTop: 8,
  },
});
