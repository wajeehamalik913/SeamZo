import React, {useState} from 'react'
import { View, Text,Image,
   ImageBackground,FlatList } from 'react-native'

export default function Search() {
      const [images, setimages] = useState([
      require('../../assets/image.jpg'),
      require('../../assets/image1.jpg'),
      require('../../assets/image2.jpg'),
      require('../../assets/image3.jpg'),
      require('../../assets/image4.jpg'),
      require('../../assets/image5.jpg'),
      require('../../assets/image6.jpg'),
      require('../../assets/image7.jpg'),
      require('../../assets/image8.jpg')
   ]);
      return (
            <View>
                  <FlatList
                        data={images}
                        key={"2"}
                        numColumns={3}
                        renderItem={({ item }) => (
                        <Image
                        source={item}
                        style={{
                              width: 200,
                              height: 220,
                              borderWidth: 1,
                              borderColor: "black",
                              resizeMode: "contain",
                              margin: 2,
                        }}
                        keyExtractor={(item) => item.id}
                        />
                        )}
                  />
            </View>
            
      )
}
