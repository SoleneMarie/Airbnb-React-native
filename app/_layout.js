import { Slot, useRouter } from "expo-router";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import { useContext, useEffect } from "react";

/*-----------( = NavigationWrapper )----------- */
const navigateFunc = () => {
  const { token } = useContext(AuthContext);
  const { id } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (token && id) {
      router.replace("/home");
    } else {
      router.replace("/");
    }
  }, [token, id]);

  return <Slot />;
};
/*-----------( = NavigationWrapper, end )----------- */

const RootLayout = () => {
  return;
  <AuthProvider>
    <navigateFunc />
  </AuthProvider>;
};

{
  /*------------------permet de présenter une page sous forme de modal -- : 
      <Stack.screen name="modal" options={{ presentation: "modal" }} />------------- */
}
