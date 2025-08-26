import SignOutButton from "@/components/SignOutButton";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <Text>HomeScreen</Text>
      <SignOutButton />
    </SafeAreaView>
  );
};

export default HomeScreen;