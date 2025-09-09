import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from "react-native";

const qaPairs = {
  "what are the dates of mahakumbh 2028": "📅 Mahakumbh 2028 will be held from 14 January to 26 February.",
  "aarti time": "🕉️ Daily Ganga Aarti at 6:30 AM and 7:00 PM.",
  "nearest toilet": "🚻 Nearest toilet is 150m from your location (Sector 4).",
  "medical help": "🏥 Nearest first aid center is at Gate 2.",
};

export default function ChatbotScreen() {
  const [query, setQuery] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    if (query.trim() === "") return;
    const lower = query.toLowerCase();
    const response = qaPairs[lower] || "🤖 Sorry, I don’t know this yet. Please ask at the help desk.";
    const newChat = [...chat, { id: Date.now(), q: query, a: response }];
    setChat(newChat);
    setQuery("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🤖 Ask KumbhAI</Text>
      <FlatList
        data={chat}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.chatBox}>
            <Text style={styles.q}>🙋 {item.q}</Text>
            <Text style={styles.a}>{item.a}</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Ask your query..."
        placeholderTextColor="#9ca3af"
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity style={styles.btn} onPress={handleSend}>
        <Text style={styles.btnText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0f24", padding: 15 },
  header: { fontSize: 22, color: "#fff", fontWeight: "bold", marginBottom: 10 },
  chatBox: { backgroundColor: "#111827", padding: 10, borderRadius: 8, marginBottom: 8 },
  q: { color: "#fbbf24", marginBottom: 5 },
  a: { color: "#22c55e" },
  input: { backgroundColor: "#1f2937", color: "#fff", padding: 10, borderRadius: 8, marginBottom: 8 },
  btn: { backgroundColor: "#2563eb", padding: 12, borderRadius: 8, alignItems: "center" },
  btnText: { color: "#fff", fontSize: 16 },
});
