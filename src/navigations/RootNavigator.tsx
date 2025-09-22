import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { createStaticNavigation } from "@react-navigation/native";
import {
  WelcomeScreen,
  HealthConcernScreen,
  DietChoiceScreen,
  AllergiesAlertScreen,
} from "../screens";

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    Welcome: {
      screen: WelcomeScreen,
      options: {
        headerShown: false,
      },
    },
    HealthConcern: {
      screen: HealthConcernScreen,
      options: {
        headerShown: false,
      },
    },
    DietChoice: {
      screen: DietChoiceScreen,
      options: {
        headerShown: false,
      },
    },
    AllergiesAlertScreen: {
      screen: AllergiesAlertScreen,
      options: {
        headerShown: false,
      },
    },
  },
});

const RootNavigator = createStaticNavigation(RootStack);

export default RootNavigator;
