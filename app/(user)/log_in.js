import { Link, router } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
const Login = () => {
  /* ---------------------------------------fonction actionnée onPress ---------------------------------------- */
  const loginFunc = async () => {
    try {
      await router.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        (req, res) => {
          {
            (email = "jhde"), (password = "dhhfdf");
          }
          res.status(200);
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <View style={{ paddingBottom: 80 }}>
            <Image
              source={require(".../assets/pictures/Airbnb-logo.jpg")}
              style={{ height: 200, width: 200 }}
            />
          </View>
        </View>
      </>
    </>
  );
};

export default Login;
