import { Link, router } from "expo-router";
import { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

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
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              paddingBottom: 80,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/pictures/Airbnb-logo.jpg")}
              style={{ height: 140, width: 130, marginBottom: 30 }}
            />
            <Text
              style={{ fontSize: 30, fontWeight: "bold", color: "#717171" }}
            >
              Log in
            </Text>
          </View>
          <View style={{ width: "80%", paddingBottom: 100 }}>
            <KeyboardAwareScrollView>
              <TextInput
                style={{
                  height: 40,
                  borderBottomColor: "#FFBAC0",
                  borderBottomWidth: 2,
                  marginBottom: 34,
                  fontSize: 20,
                }}
                placeholder="email"
                keyboardType="email-address"
                onChangeText={(item) => {
                  setEmail(item);
                }}
              />
              <TextInput
                style={{
                  height: 40,
                  borderBottomColor: "#FFBAC0",
                  borderBottomWidth: 2,
                  marginBottom: 34,
                  fontSize: 20,
                }}
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(item) => {
                  setMdp(item);
                }}
              />
            </KeyboardAwareScrollView>
          </View>
          <TouchableOpacity>
            <View
              style={{
                height: 70,
                width: 240,
                borderColor: "#EB5A62",
                borderWidth: 4,
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Text
                style={{ fontSize: 24, color: "#717171", fontWeight: "bold" }}
              >
                Log in
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 40,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#717171",
                textAlign: "center",
                marginRight: 10,
              }}
            >
              No account?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  color: "#717171",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    </>
  );
};

export default Login;
