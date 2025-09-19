import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

export function useAppNavigation() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return navigation;
}
