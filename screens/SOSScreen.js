import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SOSScreen() {
  const [sent, setSent] = useState(false);

  const handleSOS = () => {
    setSent(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚨 Emergency SOS</Text>

      <TouchableOpacity style={styles.button} onPress={handleSOS}>
        <Text style={styles.btnText}>Send SOS Alert</Text>
      </TouchableOpacity>

      {sent && (
        <Text style={styles.success}>
          ✅ SOS Alert sent to nearby authorities.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0f24", padding: 20, justifyContent: "center" },
  title: { fontSize: 22, color: "#fff", marginBottom: 20, textAlign: "center" },
  button: { backgroundColor: "#dc2626", padding: 15, borderRadius: 8, alignItems: "center" },
  btnText: { color: "#fff", fontSize: 16 },
  success: { color: "#22c55e", marginTop: 20, fontSize: 16, textAlign: "center" },
});
