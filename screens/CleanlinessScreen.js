import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import cleanlinessData from "../data/cleanliness.json";

export default function CleanlinessScreen() {
  const [location, setLocation] = useState("");
  const [issue, setIssue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (location && issue) {
      cleanlinessData.push({ location, issue, time: new Date().toLocaleString() });
      setSubmitted(true);
      setLocation("");
      setIssue("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧹 Report Cleanliness Issue</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter location"
        placeholderTextColor="#9ca3af"
        value={location}
        onChangeText={setLocation}
      />

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Describe the issue..."
        placeholderTextColor="#9ca3af"
        value={issue}
        onChangeText={setIssue}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>

      {submitted && (
        <Text style={styles.success}>
          ✅ Report submitted. Admin will review it.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0f24", padding: 20, justifyContent: "center" },
  title: { fontSize: 22, color: "#fff", marginBottom: 20, textAlign: "center" },
  input: { backgroundColor: "#111827", color: "#fff", padding: 12, borderRadius: 8, marginBottom: 15 },
  button: { backgroundColor: "#16a34a", padding: 12, borderRadius: 8, alignItems: "center" },
  btnText: { color: "#fff", fontSize: 16 },
  success: { color: "#22c55e", marginTop: 20, fontSize: 16, textAlign: "center" },
});
