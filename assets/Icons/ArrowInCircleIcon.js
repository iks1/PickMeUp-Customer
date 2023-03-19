import React from "react";
import { View } from "react-native";
import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";

const ArrowInCircleIcon = (props) => (
  <View {...props}>
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_260_1643)">
    <Path d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8.00004 1.33333C4.31814 1.33333 1.33337 4.3181 1.33337 8C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M8 10.6667L10.6667 8L8 5.33333" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M5.33337 8H10.6667" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </G>
    <Defs>
    <ClipPath id="clip0_260_1643">
    <Rect width="16" height="16" fill="white"/>
    </ClipPath>
    </Defs>
    </Svg>
  </View>
);

export default ArrowInCircleIcon;
