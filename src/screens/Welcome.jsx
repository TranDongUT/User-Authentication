import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// store
import { AuthContext } from '../store/auth-context';
// services
import { getMessage } from '../services/message';
// components
import LoadingOverlay from '../components/UI/LoadingOverlay';

export default function Welcome() {
  const authCtx = useContext(AuthContext);

  const [message, setMessage] = useState();
  const [messageIsFetching, setMessageIsFetching] = useState(false);

  const fetchMessage = async () => {
    setMessageIsFetching(true);
    try {
      const messageData = await getMessage(authCtx.token);
      setMessage(messageData);
    } catch (error) {}
    setMessageIsFetching(false);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  if (messageIsFetching) {
    return <LoadingOverlay message='Loading...' />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.text}>Authenticated successfully</Text>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  text: {
    fontSize: 16,
  },
});
