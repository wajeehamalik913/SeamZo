import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

// This resource code has been picked from Expo-image-picker boiler plate code


export default function Add({ navigation }) {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestCameraRollPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');


    })();
  }, []);


  // Function to take picture
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  }


  // Function for picking Image from Gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraCon}>
        <Camera
          ref={ref => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'} />
      </View>

      <Button
        title="Flip Image"
        onPress={() => {
          setType(  // For Front and Back camera management
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front   
              : Camera.Constants.Type.back
          );
        }}>
              
      </Button>  
      
      <Button title="Take Picture" onPress={() => takePicture()} />

      <Button title="Pick Image From Gallery" onPress={() => pickImage()} />

      <Button title="Upload" onPress={() => navigation.navigate('Upload', { image })} />
      {image && <Image 
                source={{ uri: image }} style={{ flex: 1 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
 
 containerGallery: {
        flex: 1,
        justifyContent: 'space-between',
    },
    containerImage: {
        flex: 1,
        resizeMode: 'contain',
        flexDirection: 'column',
        justifyContent:'center',
        paddingHorizontal: 5
    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1
    },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },

   cameraCon: {
    flex: 1,
    flexDirection: 'row'
  },
})