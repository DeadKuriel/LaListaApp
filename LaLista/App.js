import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './app/navigation/mainStack';
// import {Provider} from 'react-redux';
// import store from './app/redux/store';

export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
    // </Provider>
  );
}
