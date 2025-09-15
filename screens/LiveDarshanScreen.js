import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function LiveDarshanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🕉️ Live Darshan</Text>
      <Text style={styles.subtitle}>Experience Divine Presence</Text>
      
      <View style={styles.content}>
        <Text style={styles.description}>
          Connect with the sacred atmosphere of Mahakumbh through live streaming
        </Text>
        
        <TouchableOpacity style={styles.liveButton}>
          <Text style={styles.liveButtonText}>🔴 Live Stream</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.scheduleButton}>
          <Text style={styles.scheduleButtonText}>📅 Darshan Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0f24",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fbbf24",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#9ca3af",
    textAlign: "center",
    marginBottom: 30,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 16,
    color: "#9ca3af",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 24,
  },
  liveButton: {
    backgroundColor: "#dc2626",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  liveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  scheduleButton: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  scheduleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
