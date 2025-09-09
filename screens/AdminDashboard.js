import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";

import cleanlinessData from "../data/cleanliness.json";
import lostfoundData from "../data/lostfound.json";
import sosData from "../data/sos.json";

const Tab = createMaterialTopTabNavigator();

function CleanlinessTab() {
  return (
    <FlatList
      data={cleanlinessData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>📍 {item.location}</Text>
          <Text style={styles.text}>📝 {item.issue}</Text>
          <Text style={styles.time}>⏰ {item.time}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>✅ Mark Resolved</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

function LostFoundTab() {
  return (
    <FlatList
      data={lostfoundData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>📦 {item.item}</Text>
          <Text style={styles.text}>📝 {item.description}</Text>
          <Text style={styles.time}>⏰ {item.time}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>🔔 Notify Devotee</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

function SOSTab() {
  return (
    <FlatList
      data={sosData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={[styles.card, { borderColor: "#ef4444" }]}>
          <Text style={styles.title}>🚨 {item.user}</Text>
          <Text style={styles.text}>📍 {item.location}</Text>
          <Text style={styles.time}>⏰ {item.time}</Text>
          <TouchableOpacity style={[styles.button, { backgroundColor: "#dc2626" }]}>
            <Text style={styles.btnText}>⚠️ Escalate</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

function HeatmapTab() {
  return (
    <View style={styles.heatmapContainer}>
      <Text style={styles.title}>👥 Crowd Heatmap</Text>
      <Image source={require("../assets/heatmap.png")} style={styles.heatmap} />
      <Text style={styles.caption}>
        Data simulated from CCTV / drone feeds – for prototype demo only
      </Text>
    </View>
  );
}

export default function AdminHomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#0a0f24" },
        tabBarLabelStyle: { color: "#fff", fontSize: 14, fontWeight: "bold" },
        tabBarIndicatorStyle: { backgroundColor: "#16a34a" },
      }}
    >
      <Tab.Screen name="Cleanliness" component={CleanlinessTab} />
      <Tab.Screen name="Lost & Found" component={LostFoundTab} />
      <Tab.Screen name="SOS Alerts" component={SOSTab} />
      <Tab.Screen name="Heatmap" component={HeatmapTab} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    margin: 12,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#16a34a",
  },
  title: { fontSize: 18, color: "#fff", marginBottom: 5 },
  text: { fontSize: 15, color: "#d1d5db", marginBottom: 5 },
  time: { fontSize: 13, color: "#9ca3af", marginBottom: 10 },
  button: {
    backgroundColor: "#16a34a",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "bold" },
  heatmapContainer: {
    flex: 1,
    backgroundColor: "#0a0f24",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heatmap: { width: "100%", height: 400, resizeMode: "contain", marginVertical: 20 },
  caption: { color: "#9ca3af", fontSize: 14, textAlign: "center" },
});
