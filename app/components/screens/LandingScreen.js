import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

const LandingScreen = ({navigation}) => {
  return (
    <View style={[styles.group, styles.group_layout]}>
      <View style={[styles.flex, styles.flex_layout]}>
        <View style={styles.flex_row}>
          <View style={[styles.group1, styles.group1_layout]}>
            <ImageBackground
              style={[styles.image, styles.image_layout]}
              source={require('../assets/72bcc3c1c84482365a755d5bbb532f09.png')}
            />
            <View
              style={[
                styles.small_text_body_box,
                styles.small_text_body_box_layout
              ]}>
              <Text style={styles.small_text_body} ellipsizeMode={'clip'}>
                {'A trusted decentralized NFT marketplace'}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.flex_row}>
          <ImageBackground
            style={[styles.image, styles.image_layout1]}
            source={require('../assets/35edaa378c4fdbf2c1f51a8f349bd932.png')}
          />
        </View>
        <View style={styles.flex_row}>
          <ImageBackground
            style={[styles.image, styles.image_layout2]}
            source={require('../assets/18f947e70347c14a01d8dd844629bd40.png')}
          />
        </View>
        <View style={styles.flex_row}>
          <ImageBackground
            style={[styles.cover_group, styles.cover_group_layout]}
            source={require('../assets/3ed955b0383799f31625f5cd05d293c4.png')}
            resizeMode="cover">
            <ImageBackground
              style={[styles.image3, styles.image3_layout]}
              source={require('../assets/e028ee6febc49f233ce8ef4a756b1462.png')}
            />
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

LandingScreen.inStorybook = true;
LandingScreen.fitScreen = false;
LandingScreen.scrollHeight = 812;
export default LandingScreen;
const styles = StyleSheet.create({
  group: {
    backgroundColor: '#ffffffff',
    overflow: 'hidden'
  },
  group_layout: {
    marginTop: 0,
    marginBottom: 0,
    minHeight: 812,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex: {},
  flex_layout: {
    marginTop: 52,
    marginBottom: 52,
    marginLeft: 30,
    flexGrow: 1,
    marginRight: 30
  },
  flex_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  group1: {},
  group1_layout: {
    marginTop: 60,
    marginBottom: 0,
    marginLeft: 9,
    flexGrow: 1,
    marginRight: 10.06
  },
  image: {
    resizeMode: 'contain'
  },
  image_layout: {
    marginTop: 0,
    height: 93,
    marginBottom: 7,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  small_text_body_box_layout: {
    position: 'absolute',
    height: 15,
    bottom: -1,
    left: 36,
    right: 38.94024658203125
  },
  small_text_body: {
    color: '#204EF0',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 14.399999999999999,
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  small_text_body_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  image_layout1: {
    marginTop: 61,
    height: 266,
    marginBottom: 0,
    marginLeft: 42,
    flexGrow: 1,
    marginRight: 45
  },
  image_layout2: {
    marginTop: 93.75,
    height: 19.5,
    marginBottom: 0,
    marginLeft: 103.75,
    width: 89.5,
    minWidth: 89.5
  },
  cover_group: {
    borderRadius: 10
  },
  cover_group_layout: {
    marginTop: 22.75,
    marginBottom: 0,
    minHeight: 20,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  image3: {
    resizeMode: 'contain',
    borderRadius: 10,
    overflow: 'hidden' /* for borderRadius */
  },
  image3_layout: {
    marginTop: 0,
    height: 20,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 85
  }
});
