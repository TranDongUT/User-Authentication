import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../constants/styles';

import Welcome from '../screens/Welcome';
import IconButton from '../components/UI/IconButton';
import { useContext } from 'react';
import { AuthContext } from '../store/auth-context';

const Stack = createNativeStackNavigator();

export default function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary500,
        },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon='exit'
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
