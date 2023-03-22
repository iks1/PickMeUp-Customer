import React, { startTransition, useEffect, useState } from "react";
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
import { TouchableOpacity } from "react-native";

const HeartIcon = (props) => {
  const fillColor = !props.isFavourite ? "white" : "#FA3440";
  const toggleFavourite = props.onPress;

  return (
    <TouchableOpacity onPress={toggleFavourite}>
      <Svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Rect width="36" height="36" rx="18" fill={fillColor} />
        <G clip-path="url(#clip0_90_7)">
          <Path
            d="M23.8933 13.0733C23.5528 12.7327 23.1485 12.4624 22.7036 12.2781C22.2586 12.0937 21.7817 11.9988 21.3 11.9988C20.8183 11.9988 20.3414 12.0937 19.8964 12.2781C19.4515 12.4624 19.0472 12.7327 18.7067 13.0733L18 13.78L17.2933 13.0733C16.6055 12.3855 15.6727 11.9991 14.7 11.9991C13.7273 11.9991 12.7945 12.3855 12.1067 13.0733C11.4189 13.7611 11.0325 14.694 11.0325 15.6667C11.0325 16.6394 11.4189 17.5722 12.1067 18.26L12.8133 18.9667L18 24.1533L23.1867 18.9667L23.8933 18.26C24.234 17.9195 24.5042 17.5152 24.6886 17.0702C24.873 16.6253 24.9679 16.1483 24.9679 15.6667C24.9679 15.185 24.873 14.7081 24.6886 14.2631C24.5042 13.8181 24.234 13.4138 23.8933 13.0733Z"
            fill="white"
            stroke="#FA3440"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_90_7">
            <Rect
              width="16"
              height="16"
              fill="white"
              transform="translate(10 10)"
            />
          </ClipPath>
        </Defs>
      </Svg>
    </TouchableOpacity>
  );
};
export default HeartIcon;
