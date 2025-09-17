import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { createStaticNavigation } from "@react-navigation/native";
import { WelcomeScreen, HealthConcernScreen } from "../screens";

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
    }
  },
});

const RootNavigator = createStaticNavigation(RootStack);

export default RootNavigator;