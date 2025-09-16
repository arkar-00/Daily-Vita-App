import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

import type { AnimationObject } from "lottie-react-native";

interface LottieImageProps {
  source: string | AnimationObject | { uri: string };
}

export default function LottieImage({ source }: LottieImageProps) {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
    animationRef.current?.play(50, 120);
  }, []);
  return <LottieView style={styles.illus} ref={animationRef} source={source} />;
}

const styles = StyleSheet.create({
  illus: {
    width: "85%",
    height: 250,
  },
});
