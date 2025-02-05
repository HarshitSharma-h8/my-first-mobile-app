import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text className=" p-5 text-4xl font-rubik">Welcome Harshit</Text>
      <Link href="/sign-in"> Sign In</Link>
      <Link href="/explore"> Explore</Link>
      <Link href="/profile"> Profile</Link>
      <Link href="/properties/1"> Properties</Link>
    </View>
  );
}
