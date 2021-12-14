import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';


const OnBoarding = ({navigation}) => {
  return (
    <View style={[styles.group, styles.group_layout]}>
      <View style={[styles.group1, styles.group1_layout]}>
        <View style={[styles.cover_group, styles.cover_group_layout]}>
          <View style={[styles.flex, styles.flex_layout]}>
            <View style={styles.flex_row}>
              <ImageBackground
                style={[styles.image, styles.image_layout]}
                source={require('../assets/35edaa378c4fdbf2c1f51a8f349bd932.png')}
              />
            </View>
            <View style={styles.flex_row}>
              <View style={[styles.group2, styles.group2_layout]}>
                <ImageBackground
                  style={[styles.image, styles.image_layout1]}
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
              <View style={[styles.text_body_box, styles.text_body_box_layout]}>
                <Text style={styles.text_body} ellipsizeMode={'clip'}>
                  {'A trusted with digital ownership of NFT tradables'}
                </Text>
              </View>
            </View>
            <View style={styles.flex_row}>
              <View style={[styles.flex1, styles.flex1_layout]}>
                <View style={styles.flex1_col}>
                  <ImageBackground
                    style={[styles.image, styles.image_layout2]}
                    source={require('../assets/027dc014caf38409502d707dc1af8ee9.png')}
                  />
                </View>
                <View style={styles.flex1_space} />
                <View style={styles.flex1_col1}>
                  <View
                    style={[styles.cover_group1, styles.cover_group1_layout]}>
                    <View style={[styles.start_box, styles.start_box_layout]}>
                      <Text style={styles.start} ellipsizeMode={'clip'}>
                        {'START'}
                      </Text>
                    </View>

                    <View style={[styles.group3, styles.group3_layout]}>
                      <ImageBackground
                        style={[styles.img, styles.img_layout]}
                        source={require('../assets/28231f6449bb0ca5921222a46e9c0b08.png')}
                      />
                      <View
                        style={[styles.start_box, styles.start_box_layout1]}>
                        <Text style={styles.start1} ellipsizeMode={'clip'}>
                          {'START'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.big_title_box, styles.big_title_box_layout]}>
          <Text style={styles.big_title} ellipsizeMode={'clip'}>
            {'socialize, engage & make post tradables..'}
          </Text>
        </View>
      </View>
    </View>
  );
}

OnBoarding.inStorybook = true;
OnBoarding.fitScreen = false;
OnBoarding.scrollHeight = 812;
export default OnBoarding;

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
  group1: {},
  group1_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_group: {
    backgroundColor: '#ffffffff'
  },
  cover_group_layout: {
    marginTop: 0,
    marginBottom: 0,
    minHeight: 812,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex: {},
  flex_layout: {
    marginTop: 60,
    marginBottom: 10,
    marginLeft: 34.28,
    flexGrow: 1,
    marginRight: 34.28
  },
  flex_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  image: {
    resizeMode: 'contain'
  },
  image_layout: {
    marginTop: -20,
    height: 266,
    marginBottom: 0,
    marginLeft: 38.72,
    flexGrow: 1,
    marginRight: 39.72
  },
  group2: {},
  group2_layout: {
    marginTop: 30,
    marginBottom: 0,
    marginLeft: 4.72,
    flexGrow: 1,
    marginRight: 5.78
  },
  image_layout1: {
    marginTop: -40,
    height: 93,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  small_text_body_box_layout: {
    position: 'absolute',
    height: 15,
    bottom: 4,
    left: 36,
    right: 38.94024658203125
  },
  small_text_body: {
    color: '#214ff1ff',
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
  text_body_box_layout: {
    marginTop: 257.85,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  text_body: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '300',
    fontStyle: 'normal',
    fontFamily: 'System' /* Lato */,
    paddingHorizontal: 0,
    paddingVertical: 0,
    bottom: 300
  },
  text_body_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  flex1: {
    flexDirection: 'row'
  },
  flex1_layout: {
    marginTop: 42.15,
    marginBottom: 42,
    marginLeft: 12.72,
    flexGrow: 1,
    marginRight: 12.72
  },
  flex1_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 66
  },
  image_layout2: {
    marginTop: 21,
    height: 9,
    marginBottom: 14,
    marginLeft: 0,
    width: 66,
    minWidth: 66,
    marginRight: 0
  },
  flex1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 111
  },
  flex1_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 100
  },
  cover_group1: {},
  cover_group1_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  start_box_layout: {
    position: 'absolute',
    top: 12,
    bottom: 15,
    left: 23.22,
    flexGrow: 1,
    right: 23.22
  },
  start: {
    color: '#ffffffff',
    textAlign: 'right',
    letterSpacing: 0,
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Lato */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  start_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  group3: {},
  group3_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  img: {
    resizeMode: 'contain'
  },
  img_layout: {
    marginTop: 0,
    height: 44,
    marginLeft: 0,
    width: 100,
    minWidth: 100
  },
  start_box_layout1: {
    position: 'absolute',
    top: 13,
    bottom: 14,
    left: 15.22,
    flexGrow: 1,
    right: 15.22
  },
  start1: {
    color: '#ffffffff',
    textAlign: 'right',
    letterSpacing: 0,
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'System' /* Lato */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  big_title_box_layout: {
    position: 'absolute',
    top: 556,
    height: 34,
    left: 37,
    right: -312
  },
  big_title: {
    color: '#3f3f3fff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 33.6,
    fontSize: 28,
    fontWeight: '800',
    fontStyle: 'normal',
    fontFamily: 'System' /* Raleway */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  big_title_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
});