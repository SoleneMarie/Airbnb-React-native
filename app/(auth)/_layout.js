import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Log in" }} />
      <Stack.Screen name="sign_up" options={{ title: "Sign up" }} />
    </Stack>
  );
}
{
  /*------------------permet de présenter une page sous forme de modal -- : 
      <Stack.screen name="modal" options={{ presentation: "modal" }} />------------- */
}
