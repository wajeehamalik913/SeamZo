
import React, {useState, useContext, useRef} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-web'
import { storage } from '../firebase'
import Post from '../firebaseUtils/post'


const AddPostScreen = ({navigation}) => {
  const [preview, setPreview] = useState(undefined)
  const [description, setDescription] = useState('')
  const imageInputRef = useRef(null)

  /*This function adds the picture file to firebase storage and 
  changes the preview and sets it to the picture to be uploaded*/
  const handleFileChange = e => {
    const uploadFile = e.target.files[0]
    const upload = storage.ref(`/images/${uploadFile.name}`).put(uploadFile) 
    upload.on('state_changed', snapShot => console.log(snapShot), err => console.log(err), 
    () => storage.ref('images').child(uploadFile.name).getDownloadURL().then(url => {
      setPreview(url)
    }))
  }

  /* This function handles the uploading of picture and adds the post metadata 
  to the fiirestore collection named posts */
  const handleUploadPost = () => {
    const post = new Post({
      description,
      post_image: preview
    })
    post.save().then((res) => res && navigation.navigate({ name: 'SeamZo', merge: true }))
  }
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
      <input type="file" ref={imageInputRef} hidden onChange={handleFileChange}/>
      <TouchableOpacity onPress={() => imageInputRef.current.click()} style={styles.holder}>
        {!preview ? <Text style={styles.imageButtonText}>+ add image</Text> 
        : <ImageBackground source={preview} style={styles.ImageBackground} />}
      </TouchableOpacity>
      <TextInput 
       placeholder="Enter Description..."
       multiline
       onChangeText={text => setDescription(text)}
       numberOfLines={5}
       style={styles.input}
      />
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleUploadPost} style={styles.button}>
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default AddPostScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  holder: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '160px',
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  imageButtonText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
    paddingTop: '60px',
    opacity: 60
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  ImageBackground: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
  }
})