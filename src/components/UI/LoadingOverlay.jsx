import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';

export default function LoadingOverlay({ message }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#fff' />
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
  },
});
