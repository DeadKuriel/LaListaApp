// MainScreen, Pantalla inicial
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import storage from '@react-native-firebase/storage';

export default function MainScreen() {
  const [urlImage, setUrlImage] = useState('');

  const getImage = async () => {
    const reference = await storage()
      .ref('/test/mi6a8fpqodc71.png')
      .getDownloadURL()
      .then(data => {
        console.log('storage -> data', data);
        setUrlImage(data);
      })
      .catch(error => {
        console.log('storage -> error', error);
      });
  };

  useEffect(() => {
    getImage();
  }, []);

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
        {urlImage && (
          <Image
            style={{width: 300, height: 300, alignSelf:'center', resizeMode:'cover'}}
            source={{
              uri: urlImage,
            }}
          />
        )}
      </View>
    </>
  );
}
