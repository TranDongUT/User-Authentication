import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../constants/styles';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName='login'
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary500,
        },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen name='Signup' component={SignUp} />
    </Stack.Navigator>
  );
}
