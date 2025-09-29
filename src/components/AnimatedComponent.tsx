import { StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";

type AnimatedComponentType = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
};
const AnimatedComponent = ({
  children,
  duration = 400,
  delay = 500,
  ...rest
}: AnimatedComponentType) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(duration).delay(delay)}
      {...rest}
    >
      {children}
    </Animated.View>
  );
};

export default AnimatedComponent;

const styles = StyleSheet.create({});
