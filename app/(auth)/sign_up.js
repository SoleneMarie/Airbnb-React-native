import { Link, router } from "expo-router";
import { useState, useEffect } from "react";
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
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Platform,
} from "react-native";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [describe, setDescribe] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const [errorPassword, setErrorpassword] = useState(false);
  const [errorEmpty, setErrorEmpty] = useState(false);
  const [conflictErrorMail, setConflictErrorMail] = useState(false);
  const [conflictErrorUser, setConflictErrorUser] = useState(false);
  const [clearMdp, setClearMdp] = useState(false);
  const [loading, setLoading] = useState(false);

  const clearFunc = () => {
    setClearMdp(true);
  };

  const hideFunc = () => {
    setClearMdp(false);
  };
  const backToLogin = () => {
    router.navigate("/");
  };

  const signFunc = async () => {
    if (!loading) {
      setErrorpassword(false);
      setErrorEmpty(false);
      setErrorResponse("");
      setConflictErrorMail(false);
      setConflictErrorUser(false);
      setLoading(true);
      if (!email || !user || !describe || !password || !confirm) {
        setErrorEmpty(true);
      }
      if (password !== confirm) {
        setErrorpassword(true);
        setLoading(false);
        return;
      }

      try {
        await axios.post(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
          {
            email: email,
            username: user,
            description: describe,
            password: password,
          }
        );
        console.log("done!");
        setLoading(false);
        /* router.navigate("/");*/
      } catch (error) {
        setErrorResponse(error.response.data.error);
        setLoading(false);
      }
      if (errorResponse === "This email already has an account.") {
        setConflictErrorMail(true);
      }
      if (errorResponse === "This username already has an account.") {
        setConflictErrorUser(true);
      }
    }
  };

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
        <ScrollView
          persistentScrollbar={false}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              paddingBottom: 40,
              paddingTop: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={require("./../../assets/pictures/Airbnb-logo.png")}
              style={{
                height: 140,
                width: 130,
                marginBottom: 30,
              }}
            />
            <Text
              style={{ fontSize: 30, fontWeight: "bold", color: "#717171" }}
            >
              Sign up
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 10,
            }}
          >
            <KeyboardAwareScrollView style={{ width: 340, overflow: "hidden" }}>
              <TextInput
                style={{
                  height: 40,
                  borderBottomColor: "#FFBAC0",
                  borderBottomWidth: 2,
                  marginBottom: 34,
                  fontSize: 18,
                }}
                placeholder="email"
                keyboardType="email-address"
                onChangeText={(item) => {
                  setEmail(item.toLowerCase());
                }}
              />
              <TextInput
                style={{
                  height: 40,
                  borderBottomColor: "#FFBAC0",
                  borderBottomWidth: 2,
                  marginBottom: 34,
                  fontSize: 18,
                }}
                placeholder="username"
                onChangeText={(item) => {
                  setUser(item);
                }}
              />
              <View
                style={{
                  width: 340,
                  height: 120,
                  borderColor: "#FFBAC0",
                  borderWidth: 2,
                  padding: 10,
                  marginBottom: 24,
                }}
              >
                <TextInput
                  style={{
                    height: 100,
                    fontSize: 18,
                  }}
                  placeholder="Describe yourself in a few words..."
                  multiline={true}
                  maxLength={300}
                  onChangeText={(item) => {
                    setDescribe(item);
                  }}
                />
              </View>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={{
                    height: 40,
                    borderBottomColor: "#FFBAC0",
                    borderBottomWidth: 2,
                    marginBottom: 34,
                    fontSize: 18,
                    width: 340,
                  }}
                  secureTextEntry={clearMdp ? false : true}
                  placeholder="password"
                  onChangeText={(item) => {
                    setPassword(item);
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
              <View style={{ position: "relative" }}>
                <TextInput
                  style={{
                    height: 40,
                    borderBottomColor: "#FFBAC0",
                    borderBottomWidth: 2,
                    marginBottom: 34,
                    fontSize: 18,
                  }}
                  secureTextEntry={clearMdp ? false : true}
                  placeholder="confirm password"
                  onChangeText={(item) => {
                    setConfirm(item);
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
          <TouchableOpacity onPress={signFunc}>
            <View
              style={{
                height: 70,
                width: 240,
                borderColor: "#EB5A62",
                borderWidth: 4,
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                marginBottom: 20,
              }}
            >
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Text
                  style={{
                    fontSize: 24,
                    color: "#717171",
                    fontWeight: "bold",
                  }}
                >
                  Sign up
                </Text>
              )}
            </View>
          </TouchableOpacity>
          {errorPassword && (
            <View style={{ height: 20, width: "100%", alignItems: "center" }}>
              <Text style={{ color: "red", fontSize: 14 }}>
                Warning : your passwords are different
              </Text>
            </View>
          )}
          {errorEmpty && (
            <View style={{ height: 20, width: "100%", alignItems: "center" }}>
              <Text style={{ color: "red", fontSize: 14 }}>
                Warning : you must fill all fields
              </Text>
            </View>
          )}
          {conflictErrorMail && (
            <View style={{ height: 20, width: "100%", alignItems: "center" }}>
              <Text style={{ color: "red", fontSize: 14 }}>
                Warning : account already existing for this email
              </Text>
            </View>
          )}
          {conflictErrorUser && (
            <View style={{ height: 20, width: "100%", alignItems: "center" }}>
              <Text style={{ color: "red", fontSize: 14 }}>
                Warning : account already existing for this username
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
              Already have an account?
            </Text>
            <TouchableOpacity onPress={backToLogin}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#717171",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
