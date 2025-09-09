import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import lostFoundData from "../data/lostfound.json";

export default function LostFoundScreen() {
  const [item, setItem] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (item) {
      lostFoundData.push({ item, time: new Date().toLocaleString() });
      setSubmitted(true);
      setItem("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Lost & Found</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter lost/found item"
        placeholderTextColor="#9ca3af"
        value={item}
        onChangeText={setItem}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>

      {submitted && (
        <Text style={styles.success}>✅ Submitted to Lost & Found desk.</Text>
      )}

      <FlatList
        data={lostFoundData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>🔹 {item.item} ({item.time})</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0f24", padding: 20 },
  title: { fontSize: 22, color: "#fff", marginBottom: 20, textAlign: "center" },
  input: { backgroundColor: "#111827", color: "#fff", padding: 12, borderRadius: 8, marginBottom: 15 },
  button: { backgroundColor: "#2563eb", padding: 12, borderRadius: 8, alignItems: "center" },
  btnText: { color: "#fff", fontSize: 16 },
  success: { color: "#22c55e", marginTop: 20, fontSize: 16, textAlign: "center" },
  listItem: { color: "#fff", marginTop: 10 },
});
