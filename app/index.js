import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Link, router } from "expo-router";

export default function HomePage() {
  return (
    <>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <View style={{ paddingBottom: 80 }}>
          <Image
            source={require("../assets/pictures/Airbnb-logo.jpg")}
            style={{ height: 200, width: 200 }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#3E1F0D",
              paddingBottom: 30,
            }}
          >
            Welcome to my new copy
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <Link href="/sign_up">
            <Text
              style={{ fontSize: 26, fontWeight: "bold", color: "#717171" }}
            >
              Sign up
            </Text>
          </Link>
          <Link href="/log_in">
            <Text
              style={{ fontSize: 26, fontWeight: "bold", color: "#717171" }}
            >
              Login
            </Text>
          </Link>
        </View>
      </View>
    </>
  );
}
