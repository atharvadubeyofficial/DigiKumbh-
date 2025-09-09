import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CleanlinessScreen from "./CleanlinessScreen";
import LostFoundScreen from "./LostFoundScreen";
import SOSScreen from "./SOSScreen";
import MapScreen from "./MapScreen";
import ChatbotScreen from "./ChatbotScreen";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Stack = createStackNavigator();

function DevoteeMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🙏 Welcome to DigiKumbh</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Ask KumbhAI")}>
        <Text style={styles.btnText}>Ask KumbhAI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Cleanliness")}>
        <Text style={styles.btnText}>Report Cleanliness</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Map")}>
        <Text style={styles.btnText}>Crowd Heatmap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Lost & Found")}>
        <Text style={styles.btnText}>Lost & Found</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("SOS")}>
        <Text style={styles.btnText}>🚨 SOS Alert</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#0a0f24" }, headerTintColor: "#fff" }}>
      <Stack.Screen name="Devotee Home" component={DevoteeMenu} />
      <Stack.Screen name="Ask KumbhAI" component={ChatbotScreen} />
      <Stack.Screen name="Cleanliness" component={CleanlinessScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Lost & Found" component={LostFoundScreen} />
      <Stack.Screen name="SOS" component={SOSScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0f24", justifyContent: "center", padding: 20 },
  title: { fontSize: 22, color: "#fff", textAlign: "center", marginBottom: 30 },
  btn: { backgroundColor: "#16a34a", padding: 15, borderRadius: 10, marginBottom: 15 },
  btnText: { color: "#fff", textAlign: "center", fontSize: 16 },
});
