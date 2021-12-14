import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

const EditProfile = ({navigation}) => {
  return (
    <View style={[styles.group, styles.group_layout]}>
      <View style={[styles.flex, styles.flex_layout]}>
        <View style={styles.flex_row}>
          <ImageBackground
            style={[styles.image, styles.image_layout]}
            source={require('../assets/da5a7f119652070bfc6ad54202da1736.png')}
          />
        </View>
        <View style={styles.flex_row}>
          <ImageBackground
            style={[styles.cover_group, styles.cover_group_layout1]}
            source={require('../assets/e57c16cd1760bc702414be29183d74ee.png')}
            resizeMode="cover">
            <ImageBackground
              style={[styles.cover_group, styles.cover_group_layout]}
              source={require('../assets/7c8d82f9501d3a5a2836abd92cc45444.png')}
              resizeMode="cover">
              <ImageBackground
                style={[styles.icon, styles.icon_layout]}
                source={require('../assets/8328e715f3cdfe3d4834c7824a149df2.png')}
              />
            </ImageBackground>
          </ImageBackground>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.username_box, styles.username_box_layout]}>
            <Text style={styles.username} ellipsizeMode={'clip'}>
              {'Username'}
            </Text>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.highlights_box, styles.highlights_box_layout]}>
            <Text style={styles.highlights} ellipsizeMode={'clip'}>
              {'@ katiejohnson'}
            </Text>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.line, styles.line_layout]} />
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.email_box, styles.email_box_layout]}>
            <Text style={styles.email} ellipsizeMode={'clip'}>
              {'Email'}
            </Text>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.highlights_box, styles.highlights_box_layout]}>
            <Text style={styles.highlights} ellipsizeMode={'clip'}>
              {'katiejohnson@gmail.com'}
            </Text>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.line, styles.line_layout]} />
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.about_box, styles.about_box_layout]}>
            <Text style={styles.about} ellipsizeMode={'clip'}>
              {'About'}
            </Text>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.highlights_box, styles.highlights_box_layout]}>
            <Text style={styles.highlights2} ellipsizeMode={'clip'}>
              {'Life is like a circle, keep rolling everyday!'}
            </Text>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.line, styles.line_layout2]} />
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.website_box, styles.website_box_layout]}>
            <Text style={styles.website} ellipsizeMode={'clip'}>
              {'Website'}
            </Text>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.highlights_box, styles.highlights_box_layout3]}>
            <Text style={styles.highlights3} ellipsizeMode={'clip'}>
              {'katiejohnson.com'}
            </Text>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.line, styles.line_layout3]} />
        </View>
        <View style={styles.flex_row}>
          <ImageBackground
            style={[styles.group1, styles.group1_layout]}
            source={require('../assets/563e5a969e4cfcc15d8fb2929b5ebb9a.png')}
            resizeMode="contain">
            <View style={[styles.save_box, styles.save_box_layout]}>
              <Text style={styles.save} ellipsizeMode={'clip'}>
                {'Save'}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.flex1, styles.flex1_layout]}>
            <View style={styles.flex1_col}>
              <ImageBackground
                style={[styles.group2, styles.group2_layout]}
                source={require('../assets/3bca39e4be3034f7c767805be948d361.png')}
                resizeMode="contain">
                <ImageBackground
                  style={[styles.decorator, styles.decorator_layout]}
                  source={require('../assets/6e930a6464c440c4ffe7f48e91c02a15.png')}
                />
              </ImageBackground>
            </View>
            <View style={styles.flex1_space} />
            <View style={styles.flex1_col1}>
              <ImageBackground
                style={[styles.icon, styles.icon_layout1]}
                source={require('../assets/b30c8752455dff5c8955153ecb660902.png')}
              />
            </View>
            <View style={styles.flex1_space1} />
            <View style={styles.flex1_col2}>
              <ImageBackground
                style={[styles.group3, styles.group3_layout]}
                source={require('../assets/95e78fbcc82e45299bf2411e30ed25d6.png')}
                resizeMode="contain"
              />
            </View>
            <View style={styles.flex1_space2} />
            <View style={styles.flex1_col3}>
              <ImageBackground
                style={[styles.image, styles.image_layout1]}
                source={require('../assets/d6978df860874de2e72207ea8ba78f23.png')}
              />
            </View>
            <View style={styles.flex1_space3} />
            <View style={styles.flex1_col4}>
              <ImageBackground
                style={[styles.icon, styles.icon_layout2]}
                source={require('../assets/c8b0dbab0c82591312d8f84bb35c7333.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

EditProfile.inStorybook = true;
EditProfile.fitScreen = false;
EditProfile.scrollHeight = 812;
export default EditProfile;
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
    marginTop: 17,
    marginBottom: 17,
    marginLeft: 27,
    flexGrow: 1,
    marginRight: 27
  },
  flex_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  image: {
    resizeMode: 'contain'
  },
  image_layout: {
    marginTop: 45,
    height: 14,
    marginBottom: 0,
    marginLeft: 1.83,
    width: 16.33,
    minWidth: 16.33
  },
  cover_group: {},
  cover_group_layout1: {
    marginTop: 0,
    marginBottom: 0,
    minHeight: 120,
    width: 120,
    minWidth: 120,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  cover_group_layout: {
    marginTop: 92,
    marginBottom: 0,
    minHeight: 28,
    marginLeft: 'auto',
    width: 28,
    minWidth: 28,
    marginRight: 0
  },
  icon: {
    resizeMode: 'contain'
  },
  icon_layout: {
    marginTop: 5,
    height: 18,
    marginBottom: 5,
    marginLeft: 5,
    width: 18,
    minWidth: 18,
    marginRight: 5
  },
  username_box_layout: {
    marginTop: 54,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  username: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0.20000000298023224,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  username_box: {
    opacity: 0.6002371907234192,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  highlights_box_layout: {
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  highlights: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0.20000000298023224,
    lineHeight: 22,
    fontSize: 18,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  highlights_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  line: {
    backgroundColor: '#868696ff'
  },
  line_layout: {
    marginTop: 10.75,
    height: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 1
  },
  email_box_layout: {
    marginTop: 28.25,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  email: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0.20000000298023224,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  email_box: {
    opacity: 0.6002371907234192,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  highlights: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0.20000000298023224,
    lineHeight: 22,
    fontSize: 18,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  about_box_layout: {
    marginTop: 28.25,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  about: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0.20000000298023224,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  about_box: {
    opacity: 0.6002371907234192,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  highlights2: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0.20000000298023224,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  line_layout2: {
    marginTop: 12.75,
    height: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 1
  },
  website_box_layout: {
    marginTop: 28.25,
    marginBottom: 0,
    marginLeft: 1,
    flexGrow: 1,
    marginRight: 1
  },
  website: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0.20000000298023224,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  website_box: {
    opacity: 0.6002371907234192,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  highlights_box_layout3: {
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 1,
    flexGrow: 1,
    marginRight: 1
  },
  highlights3: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0.20000000298023224,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  line_layout3: {
    marginTop: 12.75,
    height: 1,
    marginBottom: 0,
    marginLeft: 1,
    flexGrow: 1,
    marginRight: 0
  },
  group1: {
    elevation: 1,
    shadowColor: '#000000',
    shadowRadius: 1.810810810810811,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 1
    }
  },
  group1_layout: {
    marginTop: 78.25,
    height: 46,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 1
  },
  save_box_layout: {
    marginTop: 14,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  save: {
    color: '#000000ff',
    textAlign: 'center',
    letterSpacing: 0.20000000298023224,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  save_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  flex1: {
    flexDirection: 'row'
  },
  flex1_layout: {
    marginTop: 36,
    marginBottom: 0,
    marginLeft: 33,
    flexGrow: 1,
    marginRight: 28.72
  },
  flex1_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 26.57
  },
  group2: {},
  group2_layout: {
    marginTop: 14.67,
    marginBottom: 24.21,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  decorator: {
    resizeMode: 'contain'
  },
  decorator_layout: {
    position: 'absolute',
    height: 13.53,
    bottom: -12.541325569152832,
    left: 3.28369140625,
    width: 20
  },
  flex1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 29.72
  },
  flex1_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 30
  },
  icon_layout1: {
    marginTop: 13,
    height: 30,
    marginBottom: 10,
    marginLeft: 0,
    width: 30,
    minWidth: 30,
    marginRight: 0
  },
  flex1_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 11
  },
  flex1_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 64
  },
  group3: {
    elevation: 1,
    shadowColor: '#000000',
    shadowRadius: 1.810810810810811,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 1
    }
  },
  group3_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex1_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 10
  },
  flex1_col3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 30
  },
  image_layout1: {
    marginTop: 13,
    height: 25.74,
    marginBottom: 14.26,
    marginLeft: 0,
    width: 30,
    minWidth: 30,
    marginRight: 0
  },
  flex1_space3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 28
  },
  flex1_col4: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 30
  },
  icon_layout2: {
    marginTop: 13,
    height: 30,
    marginBottom: 10,
    marginLeft: 0,
    width: 30,
    minWidth: 30,
    marginRight: 0
  }
});
