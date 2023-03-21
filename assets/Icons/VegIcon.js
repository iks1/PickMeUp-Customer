import React from 'react';
import { View } from 'react-native';
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
  Mask
} from 'react-native-svg';

const VegIcon = (props) => (
  <View {...props}>
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white"/>
    <Circle cx="8" cy="8" r="4" fill="#55AE63"/>
    <Rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#55AE63"/>
    </Svg>
  </View>
);

export default VegIcon;