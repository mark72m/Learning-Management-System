import { HEIGHT, WIDTH } from '@/configs/constants';
import { fontSizes, SCREEN_WIDTH, windowHeight, windowWidth } from '@/themes/app.constants';
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

export default function Slide({ slide, index, setIndex, totalSlides }: {
  slide: onBoardingSlidesTypes;
  index: number;
  setIndex: (value: number) => void;
  totalSlides: number;
}) {

  const [ModalVisible, setModalVisible] = useState(false);
  const handlePress = ( 
    index: number, setIndex: (index: number) => void ) => {
    if(index === 2){
      setModalVisible(true);
    } else {
      setIndex(index + 1);
    } 
  } 
  
  return (
    <>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id='gradient' cx="50%" cy="35%">
            <Stop offset={"0%"} stopColor={slide.color} />
            <Stop offset={"100%"} stopColor={slide.color} />
          </RadialGradient>
        </Defs>
        <Rect
          x="0"
          y="0"
          width={WIDTH}
          height={HEIGHT}
          fill="url(#gradient)" />
      </Svg>
      <View style={styles.container}>
        <View>{slide.image}</View>
        <View>
          <View style={{ width: SCREEN_WIDTH * 1, paddingHorizontal: verticalScale(25) }}>
            <Text
              style={{
                fontSize: fontSizes.FONT30,
                fontWeight: '600',
                color: "#05030D",
                fontFamily: "Poppins-600SemiBold",
              }}>
              {slide.title}
            </Text>

            <Text
              style={{
                fontSize: fontSizes.FONT30,
                fontWeight: '600',
                color: "#05030D",
                fontFamily: "Poppins-600SemiBold",
              }}>
              {slide.secondTitle}
            </Text>

            <Text
              style={{
                paddingVertical: verticalScale(4),
                fontSize: fontSizes.FONT18,
                color: "#05030D",
                fontFamily: "Poppins-300Light",
              }}>
              {slide.subtitle}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.indicatorContainer}>
        {Array.from({ length: totalSlides }).map((_, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.indicatorContainer, i === index && styles.activeIndicator]} />
        ))}
      </View>

      {/* Next Button */}
      {index <= totalSlides - 1 && (
        <LinearGradient
          colors={["#6D55FE", "#8976FC"]}
          style={styles.nextButton}>

          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
            onPress={() => handlePress(index, setIndex)}
            >
            <Text style={styles.nextButtonText}>Next</Text>
          </Pressable>
        </LinearGradient>
      )}


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: scale(60),
    paddingTop: verticalScale(100),
    alignItems: 'center',
  },

  indicatorContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(35),
    position: 'absolute',
    bottom: verticalScale(55),
    left: scale(22),

  },

  indicator: {
    height: verticalScale(7),
    width: scale(18),
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: scale(4),
    borderRadius: scale(4),
  },

  activeIndicator: {
    height: verticalScale(8),
    width: scale(40),
    backgroundColor: "white"
  },

  nextButton: {
    position: "absolute",
    zIndex: 999999999,
    right: windowWidth(25),
    bottom: windowHeight(50),
    marginTop: windowHeight(30),
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth(140),
    height: windowHeight(37),
    borderRadius: windowWidth(20),

  },

  nextButtonText: {
    color: "white",
    fontSize: fontSizes.FONT22,
    fontWeight: "bold"
  },
})