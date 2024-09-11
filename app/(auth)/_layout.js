import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }}></Stack>;
}
{
  /*------------------permet de présenter une page sous forme de modal -- : 
      <Stack.screen name="modal" options={{ presentation: "modal" }} />------------- */
}
