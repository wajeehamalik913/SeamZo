import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

const FeedScreen = ({navigation}) => {
  return (
    <View style={[styles.group, styles.group_layout]}>
      <ImageBackground
        style={[styles.decorator, styles.decorator_layout]}
        source={require('../assets/a5b33c1041aa59d1ef2949a71337e51f.png')}
      />
      <View style={[styles.kingson_box, styles.kingson_box_layout]}>
        <Text style={styles.kingson} ellipsizeMode={'clip'}>
          {'Kingson'}
        </Text>
      </View>
      <ImageBackground
        style={[styles.icon, styles.icon_layout]}
        source={require('../assets/aaa406bd59917bdd236f67d95c979f98.png')}
      />
      <View style={[styles.text_body_box, styles.text_body_box_layout]}>
        <Text style={styles.text_body} ellipsizeMode={'clip'}>
          {'12k'}
        </Text>
      </View>
      <ImageBackground
        style={[styles.decorator1, styles.decorator1_layout]}
        source={require('../assets/cd8f599d1ccc3ea56d1b430cc894c028.png')}
      />
      <ImageBackground
        style={[styles.decorator, styles.decorator_layout1]}
        source={require('../assets/549bcf6eee12a3a1d0c3fbb51b74ec92.png')}
      />
      <View style={[styles.janemo_box, styles.janemo_box_layout]}>
        <Text style={styles.janemo} ellipsizeMode={'clip'}>
          {'Janemo'}
        </Text>
      </View>
      <ImageBackground
        style={[styles.icon, styles.icon_layout1]}
        source={require('../assets/6e6f272c6da2c3f5373c21ca06ce5174.png')}
      />
      <View style={[styles.text_body_box, styles.text_body_box_layout1]}>
        <Text style={styles.text_body} ellipsizeMode={'clip'}>
          {'12k'}
        </Text>
      </View>
      <ImageBackground
        style={[styles.decorator3, styles.decorator3_layout]}
        source={require('../assets/cd8f599d1ccc3ea56d1b430cc894c028.png')}
      />
      <ImageBackground
        style={[styles.decorator, styles.decorator_layout2]}
        source={require('../assets/196e82f84118c21a1530de0a074062a5.png')}
      />
      <ImageBackground
        style={[styles.decorator5, styles.decorator5_layout]}
        source={require('../assets/b385aa245b954d9495561f0f011bd236.png')}
      />
      <View style={[styles.text_body_box, styles.text_body_box_layout2]}>
        <Text style={styles.text_body} ellipsizeMode={'clip'}>
          {'12k'}
        </Text>
      </View>
      <ImageBackground
        style={[styles.decorator, styles.decorator_layout3]}
        source={require('../assets/8d045d5f4c6ce87539a6feacfc13510e.png')}
      />
      <View style={[styles.harleyq_box, styles.harleyq_box_layout]}>
        <Text style={styles.harleyq} ellipsizeMode={'clip'}>
          {'HarleyQ'}
        </Text>
      </View>
      <ImageBackground
        style={[styles.icon, styles.icon_layout2]}
        source={require('../assets/c00665c3cdf8bf56d44211234704e68b.png')}
      />
      <View style={[styles.text_body_box3, styles.text_body_box3_layout]}>
        <Text style={styles.text_body3} ellipsizeMode={'clip'}>
          {'1.4k'}
        </Text>
      </View>
      <ImageBackground
        style={[styles.decorator7, styles.decorator7_layout]}
        source={require('../assets/cd8f599d1ccc3ea56d1b430cc894c028.png')}
      />
      <View style={[styles.zacko_box, styles.zacko_box_layout]}>
        <Text style={styles.zacko} ellipsizeMode={'clip'}>
          {'Zacko'}
        </Text>
      </View>
      <ImageBackground
        style={[styles.icon, styles.icon_layout3]}
        source={require('../assets/1340355bae04785363ec18788f7680f8.png')}
      />
      <ImageBackground
        style={[styles.decorator, styles.decorator_layout4]}
        source={require('../assets/9c2689208dba42a92568063f770199cf.png')}
      />
      <View style={[styles.text_body_box4, styles.text_body_box4_layout]}>
        <Text style={styles.text_body4} ellipsizeMode={'clip'}>
          {'890'}
        </Text>
      </View>
      <ImageBackground
        style={[styles.decorator9, styles.decorator9_layout]}
        source={require('../assets/cd8f599d1ccc3ea56d1b430cc894c028.png')}
      />
      <ImageBackground
        style={[styles.decorator, styles.decorator_layout5]}
        source={require('../assets/341e57dc7244505f64ac677aa3fce393.png')}
      />
      <ImageBackground
        style={[styles.decorator11, styles.decorator11_layout]}
        source={require('../assets/608bb2bd95a48a68d4a558f9fa0dd14c.png')}
      />

      <ImageBackground
        style={[styles.cover_group, styles.cover_group_layout]}
        source={require('../assets/93fd6d908da99cad4fc70df4f249d94a.png')}
        resizeMode="contain">
        <View
          style={[
            styles.small_text_body_box,
            styles.small_text_body_box_layout
          ]}>
          <Text style={styles.small_text_body} ellipsizeMode={'clip'}>
            {'#popular'}
          </Text>
        </View>
      </ImageBackground>

      <ImageBackground
        style={[styles.cover_group, styles.cover_group_layout1]}
        source={require('../assets/512375af953ac4a3f74320044dfab33c.png')}
        resizeMode="contain">
        <View
          style={[
            styles.small_text_body_box,
            styles.small_text_body_box_layout1
          ]}>
          <Text style={styles.small_text_body} ellipsizeMode={'clip'}>
            {'#dance'}
          </Text>
        </View>
      </ImageBackground>

      <ImageBackground
        style={[styles.cover_group, styles.cover_group_layout2]}
        source={require('../assets/c56c62d880ed16ef1ddc1edb686d0f58.png')}
        resizeMode="contain">
        <View
          style={[
            styles.small_text_body_box,
            styles.small_text_body_box_layout2
          ]}>
          <Text style={styles.small_text_body} ellipsizeMode={'clip'}>
            {'#queen'}
          </Text>
        </View>
      </ImageBackground>

      <ImageBackground
        style={[styles.cover_group, styles.cover_group_layout3]}
        source={require('../assets/7fd57c40ddd3124780aef2b06c96b925.png')}
        resizeMode="contain">
        <View
          style={[
            styles.small_text_body_box,
            styles.small_text_body_box_layout3
          ]}>
          <Text style={styles.small_text_body} ellipsizeMode={'clip'}>
            {'#move'}
          </Text>
        </View>
      </ImageBackground>

      <View
        style={[
          styles.small_text_body_box,
          styles.small_text_body_box_layout4
        ]}>
        <Text style={styles.small_text_body} ellipsizeMode={'clip'}>
          {'#gaming'}
        </Text>
      </View>
      <View style={[styles.trending_box, styles.trending_box_layout]}>
        <Text style={styles.trending} ellipsizeMode={'clip'}>
          {'Trending'}
        </Text>
      </View>
      <View style={[styles.live_box, styles.live_box_layout]}>
        <Text style={styles.live} ellipsizeMode={'clip'}>
          {'Live'}
        </Text>
      </View>
      <View style={[styles.following_box, styles.following_box_layout]}>
        <Text style={styles.following} ellipsizeMode={'clip'}>
          {'Following'}
        </Text>
      </View>
      <ImageBackground
        style={[styles.decorator12, styles.decorator12_layout]}
        source={require('../assets/5e52617d3cc8ab7932c1c15a6e0cfd03.png')}
      />
      <ImageBackground
        style={[styles.decorator13, styles.decorator13_layout]}
        source={require('../assets/5d6e5102b655c9d54fe85690675f93f2.png')}
      />
      <View style={[styles.rect, styles.rect_layout]} />
      <ImageBackground
        style={[styles.icon, styles.icon_layout4]}
        source={require('../assets/b30c8752455dff5c8955153ecb660902.png')}
      />
      <ImageBackground
        style={[styles.decorator14, styles.decorator14_layout]}
        source={require('../assets/d6978df860874de2e72207ea8ba78f23.png')}
      />
      <ImageBackground
        style={[styles.icon, styles.icon_layout5]}
        source={require('../assets/c8b0dbab0c82591312d8f84bb35c7333.png')}
      />
      <ImageBackground
        style={[styles.decorator15, styles.decorator15_layout]}
        source={require('../assets/3bca39e4be3034f7c767805be948d361.png')}
      />
      <ImageBackground
        style={[styles.decorator16, styles.decorator16_layout]}
        source={require('../assets/6e930a6464c440c4ffe7f48e91c02a15.png')}
      />
      <ImageBackground
        style={[styles.group1, styles.group1_layout]}
        source={require('../assets/95e78fbcc82e45299bf2411e30ed25d6.png')}
        resizeMode="cover"
      />
    </View>
  );
}

FeedScreen.inStorybook = true;
FeedScreen.fitScreen = false;
FeedScreen.scrollHeight = 812;
export default FeedScreen;
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
  decorator: {
    resizeMode: 'contain',
    borderRadius: 8,
    overflow: 'hidden' /* for borderRadius */
  },
  decorator_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 163,
    height: 180,
    marginBottom: 469,
    left: 7,
    width: 170,
    minWidth: 170
  },
  kingson_box_layout: {
    position: 'absolute',
    top: 352,
    bottom: 444,
    left: 48,
    flexGrow: 1,
    right: 48
  },
  kingson: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  kingson_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  icon: {
    resizeMode: 'contain'
  },
  icon_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 345,
    height: 30,
    marginBottom: 437,
    left: 14,
    width: 30,
    minWidth: 30
  },
  text_body_box_layout: {
    position: 'absolute',
    top: 351,
    bottom: 443,
    left: 0,
    right: 0,
    width: 77,
    minWidth: 77,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text_body: {
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
  text_body_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  decorator1: {
    resizeMode: 'contain'
  },
  decorator1_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 354.67,
    height: 10.83,
    marginBottom: 446.5,
    left: 131.33,
    width: 13.33,
    minWidth: 13.33
  },
  decorator_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 394,
    height: 180,
    marginBottom: 238,
    left: 8,
    width: 170,
    minWidth: 170
  },
  janemo_box_layout: {
    position: 'absolute',
    top: 584,
    bottom: 212,
    left: 52,
    flexGrow: 1,
    right: 52
  },
  janemo: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  janemo_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  icon_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 577,
    height: 30,
    marginBottom: 205,
    left: 18,
    width: 30,
    minWidth: 30
  },
  text_body_box_layout1: {
    position: 'absolute',
    top: 583,
    bottom: 211,
    left: 0,
    right: 0,
    width: 83,
    minWidth: 83,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text_body: {
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
  decorator3: {
    resizeMode: 'contain'
  },
  decorator3_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 586.67,
    height: 10.83,
    marginBottom: 214.5,
    left: 128.33,
    width: 13.33,
    minWidth: 13.33
  },
  decorator_layout2: {
    position: 'absolute',
    top: 0,
    marginTop: 625,
    height: 180,
    marginBottom: 7,
    left: 8,
    width: 170,
    minWidth: 170
  },
  decorator5: {
    resizeMode: 'contain'
  },
  decorator5_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 808,
    height: 4,
    marginBottom: 0,
    left: 18,
    width: 30,
    minWidth: 30
  },
  text_body_box_layout2: {
    position: 'absolute',
    top: 809,
    bottom: -15,
    left: 0,
    right: 0,
    width: 83,
    minWidth: 83,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text_body: {
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
  decorator_layout3: {
    position: 'absolute',
    top: 0,
    marginTop: 163,
    height: 180,
    marginBottom: 469,
    width: 170,
    minWidth: 170,
    right: 8
  },
  harleyq_box_layout: {
    position: 'absolute',
    top: 353,
    bottom: 443,
    left: 83,
    flexGrow: 1,
    right: 83
  },
  harleyq: {
    color: '#000000ff',
    textAlign: 'right',
    letterSpacing: 0,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  harleyq_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  icon_layout2: {
    position: 'absolute',
    top: 0,
    marginTop: 346,
    height: 30,
    marginBottom: 436,
    width: 30,
    minWidth: 30,
    right: 138
  },
  text_body_box3_layout: {
    position: 'absolute',
    top: 352,
    bottom: 442,
    left: 19,
    flexGrow: 1,
    right: 19
  },
  text_body3: {
    color: '#000000ff',
    textAlign: 'right',
    letterSpacing: 0.20000000298023224,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  text_body_box3: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  decorator7: {
    resizeMode: 'contain'
  },
  decorator7_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 355.67,
    height: 10.83,
    marginBottom: 445.5,
    width: 13.33,
    minWidth: 13.33,
    right: 46.33
  },
  zacko_box_layout: {
    position: 'absolute',
    top: 584,
    bottom: 212,
    left: 0,
    right: 0,
    width: 185,
    minWidth: 185,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  zacko: {
    color: '#000000ff',
    textAlign: 'right',
    letterSpacing: 0,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  zacko_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  icon_layout3: {
    position: 'absolute',
    top: 0,
    marginTop: 577,
    height: 30,
    marginBottom: 205,
    width: 30,
    minWidth: 30,
    right: 138
  },
  decorator_layout4: {
    position: 'absolute',
    top: 0,
    marginTop: 394,
    height: 180,
    marginBottom: 238,
    width: 170,
    minWidth: 170,
    right: 8
  },
  text_body_box4_layout: {
    position: 'absolute',
    top: 583,
    bottom: 211,
    left: 18,
    flexGrow: 1,
    right: 18
  },
  text_body4: {
    color: '#000000ff',
    textAlign: 'right',
    letterSpacing: 0.20000000298023224,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  text_body_box4: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  decorator9: {
    resizeMode: 'contain'
  },
  decorator9_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 586.67,
    height: 10.83,
    marginBottom: 214.5,
    width: 13.33,
    minWidth: 13.33,
    right: 46.33
  },
  decorator_layout5: {
    position: 'absolute',
    top: 0,
    marginTop: 625,
    height: 180,
    marginBottom: 7,
    width: 170,
    minWidth: 170,
    right: 8
  },
  decorator11: {
    resizeMode: 'contain'
  },
  decorator11_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 807,
    height: 5,
    marginBottom: 0,
    width: 30,
    minWidth: 30,
    right: 138
  },
  cover_group: {},
  cover_group_layout: {
    position: 'absolute',
    top: 101,
    bottom: 684,
    minHeight: 27,
    left: 11,
    width: 83,
    minWidth: 83
  },
  small_text_body_box_layout: {
    marginTop: 7,
    marginBottom: 7,
    marginLeft: 12.6,
    flexGrow: 1,
    marginRight: 12.4
  },
  small_text_body: {
    color: '#000000ff',
    textAlign: 'center',
    letterSpacing: 0.30000001192092896,
    lineHeight: 13,
    fontSize: 11,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  small_text_body_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  cover_group_layout1: {
    position: 'absolute',
    top: 100.5,
    bottom: 683.5,
    minHeight: 28,
    left: 101.5,
    width: 73,
    minWidth: 73
  },
  small_text_body_box_layout1: {
    marginTop: 7.5,
    marginBottom: 7.5,
    marginLeft: 10.74,
    flexGrow: 1,
    marginRight: 12.26
  },
  small_text_body: {
    color: '#000000ff',
    textAlign: 'center',
    letterSpacing: 0.30000001192092896,
    lineHeight: 13,
    fontSize: 11,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  cover_group_layout2: {
    position: 'absolute',
    top: 100.5,
    bottom: 683.5,
    minHeight: 28,
    width: 75,
    minWidth: 75,
    right: 118.5
  },
  small_text_body_box_layout2: {
    marginTop: 7.5,
    marginBottom: 7.5,
    marginLeft: 12.94,
    flexGrow: 1,
    marginRight: 13.06
  },
  small_text_body: {
    color: '#000000ff',
    textAlign: 'center',
    letterSpacing: 0.30000001192092896,
    lineHeight: 13,
    fontSize: 11,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  cover_group_layout3: {
    position: 'absolute',
    top: 100.5,
    bottom: 683.5,
    minHeight: 28,
    width: 78,
    minWidth: 78,
    right: 33.5
  },
  small_text_body_box_layout3: {
    marginTop: 7.5,
    marginBottom: 7.5,
    marginLeft: 15.99,
    flexGrow: 1,
    marginRight: 17.01
  },
  small_text_body: {
    color: '#000000ff',
    textAlign: 'center',
    letterSpacing: 0.30000001192092896,
    lineHeight: 13,
    fontSize: 11,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  small_text_body_box_layout4: {
    position: 'absolute',
    top: 108,
    bottom: 691,
    width: 58,
    minWidth: 58,
    right: -21.5
  },
  small_text_body: {
    color: '#000000ff',
    textAlign: 'center',
    letterSpacing: 0.30000001192092896,
    lineHeight: 13,
    fontSize: 11,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  trending_box_layout: {
    position: 'absolute',
    top: 49,
    bottom: 743,
    left: 0,
    right: 0,
    width: 133,
    minWidth: 133,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  trending: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0.20000000298023224,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  trending_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  live_box_layout: {
    position: 'absolute',
    top: 49,
    bottom: 743,
    left: 0,
    right: 0,
    width: 129,
    minWidth: 129,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  live: {
    color: '#000000ff',
    textAlign: 'right',
    letterSpacing: 0.20000000298023224,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  live_box: {
    opacity: 0.3028041422367096,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  following_box_layout: {
    position: 'absolute',
    top: 49,
    bottom: 743,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  following: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0.20000000298023224,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System' /* Poppins */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  following_box: {
    opacity: 0.303129643201828,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  decorator12: {
    resizeMode: 'contain'
  },
  decorator12_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 50,
    height: 19,
    marginBottom: 743,
    width: 21,
    minWidth: 21,
    right: 20
  },
  decorator13: {
    resizeMode: 'contain'
  },
  decorator13_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 45,
    height: 6,
    marginBottom: 761,
    width: 8.24,
    minWidth: 8.24,
    right: 123.76
  },
  rect: {
    backgroundColor: '#ffffffff'
  },
  rect_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 748,
    height: 64,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  icon_layout4: {
    position: 'absolute',
    top: 0,
    marginTop: 765,
    height: 30,
    marginBottom: 17,
    left: 116.28,
    width: 30,
    minWidth: 30
  },
  decorator14: {
    resizeMode: 'contain'
  },
  decorator14_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 765,
    height: 25.74,
    marginBottom: 21.26,
    width: 30,
    minWidth: 30,
    right: 113.72
  },
  icon_layout5: {
    position: 'absolute',
    top: 0,
    marginTop: 765,
    height: 30,
    marginBottom: 17,
    width: 30,
    minWidth: 30,
    right: 55.72
  },
  decorator15: {
    resizeMode: 'contain'
  },
  decorator15_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 766.67,
    height: 14.13,
    marginBottom: 31.21,
    left: 60,
    width: 26.57,
    minWidth: 26.57
  },
  decorator16: {
    resizeMode: 'contain'
  },
  decorator16_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 779.8,
    height: 13.53,
    marginBottom: 18.67,
    left: 63.28,
    width: 20,
    minWidth: 20
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
    position: 'absolute',
    top: 752,
    bottom: 7,
    left: 0,
    right: 0,
    width: 64,
    minWidth: 64,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});