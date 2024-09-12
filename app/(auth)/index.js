import { Link, router } from "expo-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import Constants from "expo-constants";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  SafeAreaView,
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [clearMdp, setClearMdp] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);

  const clearFunc = () => {
    setClearMdp(true);
  };

  const hideFunc = () => {
    setClearMdp(false);
  };

  const backToSignup = () => {
    router.navigate("/sign_up");
  };
  const loginFunc = async () => {
    if (!email || !mdp) {
      setEmpty(true);
      setErrorName(false);
      setErrorPass(false);
    }
    try {
      setLoading(true),
        await axios.post(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
          {
            email: email.toLowerCase(),
            password: mdp.toLowerCase(),
          }
        );
      console.log("yeah");
      setLoading(false);
      /* router.navigate("/");*/
    } catch (error) {
      console.log(error.response.data);
      setLoading(false);
      if (error.response.data.error === "This account doesn't exist !") {
        setErrorMail(true);
      }
      if (error.response.data.error === "Unauthorized") {
        setErrorPass(true);
      }
    }
  };
  /* ---------------------------------------fonction actionnée onPress ---------------------------------------- */

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        }}
      >
        <View
          style={{
            paddingBottom: 80,
            alignItems: "center",
          }}
        >
          <Image
            source={require("./../../assets/pictures/Airbnb-logo.png")}
            style={{ height: 140, width: 130, marginBottom: 30 }}
          />
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#717171" }}>
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
            <View style={{ position: "relative" }}>
              <TextInput
                style={{
                  height: 40,
                  borderBottomColor: "#FFBAC0",
                  borderBottomWidth: 2,
                  marginBottom: 34,
                  fontSize: 20,
                }}
                placeholder="password"
                secureTextEntry={clearMdp ? false : true}
                onChangeText={(item) => {
                  setMdp(item);
                }}
              />
              {clearMdp ? (
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 10,
                    bottom: 40,
                  }}
                  onPress={hideFunc}
                >
                  <Feather name="eye" size={24} color="black" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 10,
                    bottom: 40,
                  }}
                  onPress={clearFunc}
                >
                  <Feather name="eye-off" size={24} color="black" />
                </TouchableOpacity>
              )}
            </View>
          </KeyboardAwareScrollView>
        </View>
        <TouchableOpacity onPress={loginFunc}>
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
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text
                style={{ fontSize: 24, color: "#717171", fontWeight: "bold" }}
              >
                Log in
              </Text>
            )}
          </View>
        </TouchableOpacity>
        {empty && (
          <View style={{ height: 20, width: "100%", alignItems: "center" }}>
            <Text style={{ color: "red", fontSize: 14 }}>
              Warning : you must fill all fields
            </Text>
          </View>
        )}
        {errorMail && (
          <View style={{ height: 20, width: "100%", alignItems: "center" }}>
            <Text style={{ color: "red", fontSize: 14 }}>
              Warning : this account doesn't exist
            </Text>
          </View>
        )}
        {errorPass && (
          <View style={{ height: 20, width: "100%", alignItems: "center" }}>
            <Text style={{ color: "red", fontSize: 14 }}>
              Warning : wrong password
            </Text>
          </View>
        )}
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
          <TouchableOpacity onPress={backToSignup}>
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
    </SafeAreaView>
  );
};

export default Login;
