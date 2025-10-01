import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../../assets/colors";
import { CustomButton, TagSearchSimple, Screen } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllergies,
  selectAllergies,
} from "../../redux/slices/onBoardingSlice";

const AllergiesAlertScreen = () => {
  const navigation = useAppNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressNext = () => {
    navigation.navigate("PersonalizeVitaminScreen");
  };

  const dispatch = useDispatch();
  const selectedAllergies = useSelector(selectAllergies);

  return (
    <Screen>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Write any specific allergies or sensitivity toward specific things.
            (Optional)
          </Text>
        </View>

        <TagSearchSimple
          value={selectedAllergies}
          placeholder="Type to search allergies…"
          onChange={(list) => dispatch(setAllergies(list))}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          text="Back"
          onPress={onPressBack}
          style={{ ...styles.button, backgroundColor: "transparent" }}
          textStyle={{ color: COLORS.text }}
        />
        <CustomButton text="Next" onPress={onPressNext} style={styles.button} />
      </View>
    </Screen>
  );
};

export default AllergiesAlertScreen;

const styles = StyleSheet.create({
  content: { flex: 1 },
  header: { justifyContent: "flex-start", marginBottom: 12 },
  title: {
    fontSize: 22,
    fontWeight: "500",
    color: COLORS.text,
    marginBottom: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});
