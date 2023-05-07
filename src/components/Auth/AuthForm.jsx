import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

// constants
import { Colors } from '../../constants/styles';

// components
import Input from './Input';
import Button from '../UI/Button';

export default function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const {
    email: emailIsInValid,
    password: passwordIsInValid,
    confirmEmail: confirmEmailIsInValid,
    confirmPassword: confirmPasswordIsInValid,
  } = credentialsInvalid;

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    confirmEmail: '',
    confirmPassword: '',
  });

  const handleChangeInput = (inputType, value) => {
    switch (inputType) {
      case 'email':
        setInputValue((prev) => ({ ...prev, email: value }));
        break;
      case 'confirmEmail':
        setInputValue((prev) => ({ ...prev, confirmEmail: value }));
        break;

      case 'password':
        setInputValue((prev) => ({ ...prev, password: value }));
        break;
      case 'confirmPassword':
        setInputValue((prev) => ({ ...prev, confirmPassword: value }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
  };

  return (
    <View>
      <Input
        inputConfig={{
          keyboardType: 'default',
          autoCapitalize: 'none',
          autoCorrect: false,
          onChangeText: (value) => handleChangeInput('email', value),
        }}
        label='Email Address'
        isInvalid={emailIsInValid}
      />
      {!isLogin && (
        <Input
          inputConfig={{
            keyboardType: 'default',
            autoCapitalize: 'none',
            autoCorrect: false,
            onChangeText: (value) => handleChangeInput('confirmEmail', value),
          }}
          label='Confirm Email Address'
          isInvalid={confirmEmailIsInValid}
        />
      )}
      <Input
        inputConfig={{
          keyboardType: 'default',
          autoCapitalize: 'none',
          autoCorrect: false,
          secureTextEntry: true,
          onChangeText: (value) => handleChangeInput('password', value),
        }}
        label='Password'
        isInvalid={passwordIsInValid}
      />
      {!isLogin && (
        <Input
          inputConfig={{
            keyboardType: 'default',
            autoCapitalize: 'none',
            autoCorrect: false,
            secureTextEntry: true,
            onChangeText: (value) =>
              handleChangeInput('confirmPassword', value),
          }}
          label='Confirm Password'
          isInvalid={confirmPasswordIsInValid}
        />
      )}

      <View style={styles.buttons}>
        <Button onPress={handleSubmit}>{isLogin ? 'Log In' : 'Sign up'}</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
