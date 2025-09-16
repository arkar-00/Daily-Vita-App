import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import COLORS from "../assets/colors";

type CustomButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function CustomButton({
  onPress,
  text,
  style,
  textStyle,
  ...rest
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={{ ...styles.cta, ...(style as object) }}
      onPress={onPress}
      activeOpacity={0.9}
      {...rest}
    >
      <Text style={[styles.ctaText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cta: {
    backgroundColor: COLORS.button,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  ctaText: {
    color: COLORS.buttonText,
    fontSize: 16,
    fontWeight: "700",
  },
});
