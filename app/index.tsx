import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Login() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Login as Admin" onPress={() => router.replace("/admin/dashboard")} />
      <Button title="Login as User" onPress={() => router.replace("/user/home")} />

      
    </View>
  );
}
