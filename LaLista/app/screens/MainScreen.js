// MainScreen, Pantalla inicial
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function MainScreen() {
  return (
    <>
      <View
        style={{
          height: '100%',
          width: '100%',
          alignContent: 'center',
          justifyContent: 'center',
          // backgroundColor: '#000',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#CCC',
            alignSelf: 'center',
            padding: 30,
            margin: 10,
            borderRadius: 20,
          }}
          onPress={() => {}}>
          <Text>Boton 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#CCC',
            alignSelf: 'center',
            padding: 30,
            margin: 10,
            borderRadius: 20,
          }}
          onPress={() => {}}>
          <Text>Boton 2</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
