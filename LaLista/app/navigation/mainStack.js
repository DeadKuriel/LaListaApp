import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';

function MainStack() {
  const mainStack = createNativeStackNavigator();

  return (
    <mainStack.Navigator>
      <mainStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerTintColor: '#000',
          headerTitle: 'Main LaLista (En Construcción)',
          headerTransparent: true,
          //   headerLeft: () => <></>,   // Para quitar el back de las pantallas
        }}
      />
    </mainStack.Navigator>
  );
}

export default MainStack;
