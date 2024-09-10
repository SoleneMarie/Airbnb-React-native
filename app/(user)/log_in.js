import { Link, router } from "expo-router";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");

  const loginFunc = async () => {
    try {
      await router.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        (req, res) => {
          {
            (email = { email }), (password = { mdp });
          }
          res.status(200);
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  /* ---------------------------------------fonction actionnée onPress ---------------------------------------- */

  return (
    <>
      <>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <View style={{ paddingBottom: 80 }}>
            <Image
              source={require("../../assets/pictures/Airbnb-logo.jpg")}
              style={{ height: 200, width: 200 }}
            />
          </View>
          <View>
            <TextInput
              style={{}}
              placeholder="Email"
              value={email}
              onChangeText={(item) => {
                setEmail(item);
              }}
            />
            <TextInput
              style={{}}
              placeholder="Password"
              value={password}
              onChangeText={(item) => {
                setMdp(item);
              }}
            />
          </View>
        </View>
      </>
    </>
  );
};

export default Login;
