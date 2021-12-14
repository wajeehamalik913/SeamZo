import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={[styles.group, styles.group_layout]}>
      <View style={[styles.flex, styles.flex_layout3]}>
        <View style={styles.flex_row}>
          <ImageBackground
            style={[styles.image, styles.image_layout]}
            source={require('../assets/da5a7f119652070bfc6ad54202da1736.png')}
          />
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.group1, styles.group1_layout]}>
            <View style={[styles.rect, styles.rect_layout]} />

            <View style={[styles.cover_group, styles.cover_group_layout]}>
              <ImageBackground
                style={[styles.icon, styles.icon_layout]}
                source={require('../assets/c3c580b4cb6125d6807718f0453e4b48.png')}
              />
              <ImageBackground
                style={[styles.decorator, styles.decorator_layout]}
                source={require('../assets/f6deb051d96b146f6cbd5659f3c4aa08.png')}
              />

              <ImageBackground
                style={[styles.cover_group1, styles.cover_group1_layout]}
                source={require('../assets/ef5beaeae6eeb95a312ccbf2b77d4663.png')}
                resizeMode="contain">
                <ImageBackground
                  style={[styles.image, styles.image_layout1]}
                  source={require('../assets/5cf194e6a1d9d50793f30f392de35bcf.png')}
                />
              </ImageBackground>

              <ImageBackground
                style={[styles.icon, styles.icon_layout1]}
                source={require('../assets/9ae3cda2f85d61af911470f328f5fae0.png')}
              />
              <ImageBackground
                style={[styles.decorator, styles.decorator_layout1]}
                source={require('../assets/d7e71226075557b52ceab235824682b4.png')}
              />
              <ImageBackground
                style={[styles.decorator, styles.decorator_layout2]}
                source={require('../assets/d2eaae86b583bc27064c7db0fb072425.png')}
              />
              <ImageBackground
                style={[styles.decorator, styles.decorator_layout3]}
                source={require('../assets/cb1846e632d1406f52a65b444977c2bc.png')}
              />
              <ImageBackground
                style={[styles.decorator, styles.decorator_layout4]}
                source={require('../assets/ee3ed32eb440cf224679ab8b7ccb0edb.png')}
              />

              <View style={[styles.group2, styles.group2_layout]}>
                <View style={[styles.flex, styles.flex_layout]}>
                  <View style={styles.flex1_row}>
                    <View style={[styles.flex2, styles.flex2_layout]}>
                      <View style={styles.flex2_col}>
                        <ImageBackground
                          style={[styles.icon, styles.icon_layout2]}
                          source={require('../assets/c3c580b4cb6125d6807718f0453e4b48.png')}
                        />
                      </View>
                      <View style={styles.flex2_space} />
                      <View style={styles.flex2_col1}>
                        <View
                          style={[
                            styles.jon_von_box,
                            styles.jon_von_box_layout
                          ]}>
                          <Text style={styles.jon_von} ellipsizeMode={'clip'}>
                            {'Jon Von'}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.flex2_space1} />
                      <View style={styles.flex2_col2}>
                        <ImageBackground
                          style={[styles.icon, styles.icon_layout3]}
                          source={require('../assets/b1aebec1014b278c6affa6ef8f21cb04.png')}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.flex1_row}>
                    <ImageBackground
                      style={[styles.decorator, styles.decorator_layout5]}
                      source={require('../assets/ef5beaeae6eeb95a312ccbf2b77d4663.png')}
                    />
                  </View>
                  <View style={styles.flex1_row}>
                    <View style={[styles.flex3, styles.flex3_layout]}>
                      <View style={styles.flex3_col}>
                        <ImageBackground
                          style={[styles.decorator, styles.decorator_layout6]}
                          source={require('../assets/7c24aa65acd29326aa2f4b3d64a64a32.png')}
                        />
                      </View>
                      <View style={styles.flex3_space} />
                      <View style={styles.flex3_col}>
                        <View style={[styles.group3, styles.group3_layout]}>
                          <View
                            style={[
                              styles.caption_box,
                              styles.caption_box_layout
                            ]}>
                            <Text style={styles.caption} ellipsizeMode={'clip'}>
                              {'Caption'}
                            </Text>
                          </View>
                          <ImageBackground
                            style={[styles.decorator, styles.decorator_layout7]}
                            source={require('../assets/ee3ed32eb440cf224679ab8b7ccb0edb.png')}
                          />
                        </View>
                      </View>
                      <View style={styles.flex3_space1} />
                      <View style={styles.flex3_col2}>
                        <ImageBackground
                          style={[styles.decorator, styles.decorator_layout8]}
                          source={require('../assets/2471f89ce233cb894c76b86c82ccd8c7.png')}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.cover_group2, styles.cover_group2_layout]}>
            <View style={[styles.flex, styles.flex_layout1]}>
              <View style={styles.flex4_row}>
                <View style={[styles.flex5, styles.flex5_layout]}>
                  <View style={styles.flex5_col}>
                    <ImageBackground
                      style={[styles.icon, styles.icon_layout4]}
                      source={require('../assets/13d2d2df0c8b4a48d16252327c83c7c3.png')}
                    />
                  </View>
                  <View style={styles.flex5_space} />
                  <View style={styles.flex5_col1}>
                    <View
                      style={[styles.jon_von_box, styles.jon_von_box_layout1]}>
                      <Text style={styles.jon_von} ellipsizeMode={'clip'}>
                        {'Jon Von'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.flex5_space1} />
                  <View style={styles.flex5_col2}>
                    <ImageBackground
                      style={[styles.icon, styles.icon_layout5]}
                      source={require('../assets/cc97fa405fba0b4112989611fc330e44.png')}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.flex4_row}>
                <ImageBackground
                  style={[styles.image, styles.image_layout2]}
                  source={require('../assets/5381beba58d15025989e2e383b19aae2.png')}
                />
              </View>
              <View style={styles.flex4_row}>
                <View style={[styles.flex6, styles.flex6_layout]}>
                  <View style={styles.flex6_col}>
                    <View
                      style={[styles.caption_box, styles.caption_box_layout1]}>
                      <Text style={styles.caption} ellipsizeMode={'clip'}>
                        {'Caption'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.flex6_space} />
                  <View style={styles.flex6_col1}>
                    <ImageBackground
                      style={[styles.image, styles.image_layout3]}
                      source={require('../assets/30469a87353f0b2f775b1f67e36d3073.png')}
                    />
                  </View>
                  <View style={styles.flex6_space1} />
                  <View style={styles.flex6_col2}>
                    <ImageBackground
                      style={[styles.image, styles.image_layout4]}
                      source={require('../assets/d8c4b752e87b875dedfa1aec3b50ff31.png')}
                    />
                  </View>
                  <View style={styles.flex6_space2} />
                  <View style={styles.flex6_col3}>
                    <ImageBackground
                      style={[styles.image, styles.image_layout5]}
                      source={require('../assets/94fa0a24350adf9d5359fe7dafa0b85c.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.flex7, styles.flex7_layout]}>
            <View style={styles.flex7_col}>
              <View style={[styles.flex, styles.flex_layout2]}>
                <View style={styles.flex8_row}>
                  <ImageBackground
                    style={[styles.group4, styles.group4_layout]}
                    source={require('../assets/90392ad7f9c978e4b02fbae06e38903d.png')}
                    resizeMode="contain">
                    <ImageBackground
                      style={[styles.decorator, styles.decorator_layout9]}
                      source={require('../assets/c5e20894ff055b7360244891c1a0dbce.png')}
                    />
                  </ImageBackground>
                </View>
                <View style={styles.flex8_row}>
                  <ImageBackground
                    style={[styles.icon, styles.icon_layout6]}
                    source={require('../assets/c035207d3b45e5951c14ef0dff3d0dc7.png')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.flex7_space} />
            <View style={styles.flex7_col1}>
              <ImageBackground
                style={[styles.icon, styles.icon_layout7]}
                source={require('../assets/416a5a25ac74488b10c80817208fb072.png')}
              />
            </View>
            <View style={styles.flex7_space1} />
            <View style={styles.flex7_col2}>
              <ImageBackground
                style={[styles.group5, styles.group5_layout]}
                source={require('../assets/549f152da89235a0247d406eddf7cb36.png')}
                resizeMode="contain"
              />
            </View>
            <View style={styles.flex7_space2} />
            <View style={styles.flex7_col3}>
              <ImageBackground
                style={[styles.image, styles.image_layout6]}
                source={require('../assets/5612b45b642fb01ebcbda698d3a0833d.png')}
              />
            </View>
            <View style={styles.flex7_space3} />
            <View style={styles.flex7_col4}>
              <ImageBackground
                style={[styles.icon, styles.icon_layout8]}
                source={require('../assets/9c92e38c1acaa227139a27cc799e8435.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

HomeScreen.inStorybook = true;
HomeScreen.fitScreen = false;
HomeScreen.scrollHeight = 812;
export default HomeScreen;
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
  flex_layout3: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 21.83,
    flexGrow: 1,
    marginRight: 21.83
  },
  flex_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  image: {
    resizeMode: 'contain'
  },
  image_layout: {
    marginTop: 12,
    height: 14,
    marginBottom: 0,
    marginLeft: 0,
    width: 16.33,
    minWidth: 16.33
  },
  group1: {},
  group1_layout: {
    marginTop: 19,
    marginBottom: 0,
    marginLeft: 6.17,
    flexGrow: 1,
    marginRight: 8.17
  },
  rect: {
    opacity: 0.10000000149011612,
    backgroundColor: '#66f29eff',
    borderRadius: 5
  },
  rect_layout: {
    marginTop: 0,
    height: 337,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_group: {},
  cover_group_layout: {
    position: 'absolute',
    top: -1,
    height: 337,
    left: 0,
    right: 0
  },
  icon: {
    resizeMode: 'contain'
  },
  icon_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 12.17,
    height: 50.75,
    marginBottom: 274.08,
    left: 11.07,
    width: 50.32,
    minWidth: 50.32
  },
  decorator: {
    resizeMode: 'contain'
  },
  decorator_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 27.39,
    height: 21.32,
    marginBottom: 288.29,
    left: 77.49,
    width: 67.43,
    minWidth: 67.43
  },
  cover_group1: {},
  cover_group1_layout: {
    position: 'absolute',
    top: 73.07,
    bottom: 40.62,
    minHeight: 223.31,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  image_layout1: {
    marginTop: 196.93,
    height: 26,
    marginBottom: 0.38,
    marginLeft: 'auto',
    width: 24,
    minWidth: 24,
    marginRight: 126
  },
  icon_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 12.07,
    height: 21.5,
    marginBottom: 303.43,
    width: 21.5,
    minWidth: 21.5,
    right: 6.86
  },
  decorator_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 310.59,
    height: 16.26,
    marginBottom: 10.15,
    width: 20.12,
    minWidth: 20.12,
    right: 7.05
  },
  decorator_layout2: {
    position: 'absolute',
    top: 0,
    marginTop: 310.59,
    height: 17.76,
    marginBottom: 8.65,
    width: 20.13,
    minWidth: 20.13,
    right: 65.41
  },
  decorator_layout3: {
    position: 'absolute',
    top: 0,
    marginTop: 310.59,
    height: 16.24,
    marginBottom: 10.17,
    left: 28.18,
    width: 49.31,
    minWidth: 49.31
  },
  decorator_layout4: {
    position: 'absolute',
    top: 0,
    marginTop: 310.59,
    height: 17.42,
    marginBottom: 8.99,
    width: 20.13,
    minWidth: 20.13,
    right: 37.23
  },
  group2: {
    backgroundColor: '#13b9cd67',
    borderRadius: 5
  },
  group2_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex_layout: {
    marginTop: 9.65,
    marginBottom: 9.65,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex1_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex2: {
    flexDirection: 'row'
  },
  flex2_layout: {
    marginTop: 1.43,
    marginBottom: 0,
    marginLeft: 11.07,
    flexGrow: 1,
    marginRight: 6.86
  },
  flex2_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 50.32
  },
  icon_layout2: {
    marginTop: 0.09,
    height: 50.75,
    marginBottom: 0,
    marginLeft: 0,
    width: 50.32,
    minWidth: 50.32,
    marginRight: 0
  },
  flex2_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 16.1
  },
  flex2_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  jon_von_box_layout: {
    marginTop: 15.32,
    marginBottom: 13.53,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  jon_von: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 21.599999999999998,
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  jon_von_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex2_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 49.13
  },
  flex2_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 21.5
  },
  icon_layout3: {
    marginTop: 0,
    height: 21.5,
    marginBottom: 29.34,
    marginLeft: 0,
    width: 21.5,
    minWidth: 21.5,
    marginRight: 0
  },
  decorator_layout5: {
    marginTop: 10.15,
    height: 223.31,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex3: {
    flexDirection: 'row'
  },
  flex3_layout: {
    marginTop: 14.21,
    marginBottom: 0,
    marginLeft: 'auto',
    width: 78.49,
    minWidth: 78.49,
    marginRight: 7.05
  },
  flex3_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 20.13
  },
  decorator_layout6: {
    marginTop: 0,
    height: 17.76,
    marginBottom: 0,
    marginLeft: 0,
    width: 20.13,
    minWidth: 20.13,
    marginRight: 0
  },
  flex3_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8.05
  },
  group3: {},
  group3_layout: {
    marginTop: 0,
    marginBottom: 0.34,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  caption_box_layout: {
    position: 'absolute',
    top: 0,
    height: 17,
    left: -231.46026611328125,
    right: -9.057159423828125
  },
  caption: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  caption_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  decorator_layout7: {
    marginTop: 0,
    height: 17.42,
    marginBottom: 0,
    marginLeft: 0,
    width: 20.13,
    minWidth: 20.13,
    marginRight: 0
  },
  flex3_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 10.06
  },
  flex3_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 20.12
  },
  decorator_layout8: {
    marginTop: 0,
    height: 16.26,
    marginBottom: 1.5,
    marginLeft: 0,
    width: 20.12,
    minWidth: 20.12,
    marginRight: 0
  },
  cover_group2: {
    backgroundColor: '#13b9cd67',
    borderRadius: 5
  },
  cover_group2_layout: {
    marginTop: 25.33,
    marginBottom: 0,
    marginLeft: 6.17,
    flexGrow: 1,
    marginRight: 8.17
  },
  flex_layout1: {
    marginTop: 9.41,
    marginBottom: 9.41,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex4_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex5: {
    flexDirection: 'row'
  },
  flex5_layout: {
    marginTop: 1.13,
    marginBottom: 0,
    marginLeft: 11.07,
    flexGrow: 1,
    marginRight: 6.86
  },
  flex5_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 50.32
  },
  icon_layout4: {
    marginTop: 0.35,
    height: 49.5,
    marginBottom: 0,
    marginLeft: 0,
    width: 50.32,
    minWidth: 50.32,
    marginRight: 0
  },
  flex5_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 16.1
  },
  flex5_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  jon_von_box_layout1: {
    marginTop: 15.2,
    marginBottom: 12.65,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  jon_von: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 21.599999999999998,
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  flex5_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 141.15
  },
  flex5_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 21.5
  },
  icon_layout5: {
    marginTop: 0,
    height: 21.5,
    marginBottom: 28.35,
    marginLeft: 0,
    width: 21.5,
    minWidth: 21.5,
    marginRight: 0
  },
  image_layout2: {
    marginTop: 9.9,
    height: 217.79,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex6: {
    flexDirection: 'row'
  },
  flex6_layout: {
    marginTop: 13.86,
    marginBottom: 0,
    marginLeft: 28.18,
    flexGrow: 1,
    marginRight: 7.05
  },
  flex6_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  caption_box_layout1: {
    marginTop: 0,
    marginBottom: 0.32,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  caption: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  flex6_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 151.28
  },
  flex6_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 20.13
  },
  image_layout3: {
    marginTop: 0,
    height: 17.32,
    marginBottom: 0,
    marginLeft: 0,
    width: 20.13,
    minWidth: 20.13,
    marginRight: 0
  },
  flex6_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8.05
  },
  flex6_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 20.13
  },
  image_layout4: {
    marginTop: 0,
    height: 16.99,
    marginBottom: 0.33,
    marginLeft: 0,
    width: 20.13,
    minWidth: 20.13,
    marginRight: 0
  },
  flex6_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 10.06
  },
  flex6_col3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 20.12
  },
  image_layout5: {
    marginTop: 0,
    height: 15.86,
    marginBottom: 1.46,
    marginLeft: 0,
    width: 20.12,
    minWidth: 20.12,
    marginRight: 0
  },
  flex7: {
    flexDirection: 'row'
  },
  flex7_layout: {
    marginTop: 7,
    marginBottom: 0,
    marginLeft: 36.88,
    flexGrow: 1,
    marginRight: 35.17
  },
  flex7_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 26.57
  },
  flex_layout2: {
    marginTop: 14.67,
    marginBottom: 4,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex8_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  group4: {},
  group4_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  decorator_layout9: {
    position: 'absolute',
    height: 13.53,
    bottom: -12.541272163391113,
    left: 3.28369140625,
    width: 20
  },
  icon_layout6: {
    marginTop: 15.21,
    height: 5,
    marginBottom: 0,
    width: 5,
    minWidth: 5,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  flex7_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 29.72
  },
  flex7_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 30
  },
  icon_layout7: {
    marginTop: 13,
    height: 30,
    marginBottom: 10,
    marginLeft: 0,
    width: 30,
    minWidth: 30,
    marginRight: 0
  },
  flex7_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 11
  },
  flex7_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 64
  },
  group5: {
    elevation: 1,
    shadowColor: '#000000',
    shadowRadius: 1.810810810810811,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 1
    }
  },
  group5_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex7_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 10
  },
  flex7_col3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 30
  },
  image_layout6: {
    marginTop: 13,
    height: 25.74,
    marginBottom: 14.26,
    marginLeft: 0,
    width: 30,
    minWidth: 30,
    marginRight: 0
  },
  flex7_space3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 28
  },
  flex7_col4: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 30
  },
  icon_layout8: {
    marginTop: 13,
    height: 30,
    marginBottom: 10,
    marginLeft: 0,
    width: 30,
    minWidth: 30,
    marginRight: 0
  }
});