import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import CleanlinessScreen from "./screens/CleanlinessScreen";
import LostFoundScreen from "./screens/LostFoundScreen";
import SOSScreen from "./screens/SOSScreen";
import ChatbotScreen from "./screens/ChatbotScreen";
import LiveDarshanScreen from "./screens/LiveDarshanScreen";
import MapScreen from "./screens/MapScreen";
import AdminDashboard from "./screens/AdminDashboard";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 🎯 Devotee Tabs
function DevoteeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#0a0f24" },
        tabBarActiveTintColor: "#fbbf24",
        tabBarInactiveTintColor: "#9ca3af",
      }}
    >
      <Tab.Screen name="Ask KumbhAI" component={ChatbotScreen} />
      <Tab.Screen name="Cleanliness" component={CleanlinessScreen} />
      <Tab.Screen name="Lost & Found" component={LostFoundScreen} />
      <Tab.Screen name="SOS" component={SOSScreen} />
      <Tab.Screen name="Live Darshan" component={LiveDarshanScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
}

// 🎯 Role Selection Screen
function RoleSelection({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DIGIKUMBH</Text>
      <Text style={styles.subtitle}>Smart Mahakumbh Assistant</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Devotee")}
      >
        <Text style={styles.btnText}>🧑 Continue as Devotee</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Admin")}
      >
        <Text style={styles.btnText}>🛡️ Admin Login</Text>
      </TouchableOpacity>
    </View>
  );
}

// 🎯 Main App Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RoleSelection" component={RoleSelection} />
        <Stack.Screen name="Devotee" component={DevoteeTabs} />
        <Stack.Screen name="Admin" component={AdminDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// 🎯 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0f24",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 28, fontWeight: "bold", color: "#fbbf24", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#9ca3af", marginBottom: 30 },
  btn: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
