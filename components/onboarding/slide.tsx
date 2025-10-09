import { HEIGHT, WIDTH } from '@/configs/constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

export default function Slide({ slide, index, setIndex, totalSlides }: {
  slide: onBoardingSlidesTypes;
  index: number;
  setIndex: (value: number) => void;
  totalSlides: number;
}) {
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
        <View>
          {slide.image}
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: scale(60),
    paddingTop: verticalScale(100),
    alignItems: 'center',
  }
})