import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import heatmapPoints from "../data/heatmap_points.json";

export default function MapScreen() {
  const [points, setPoints] = useState(heatmapPoints);

  const refreshHeatmap = () => {
    // Demo ke liye random density change
    const updated = points.map((p) => ({
      ...p,
      density: ["low", "medium", "high"][Math.floor(Math.random() * 3)],
    }));
    setPoints(updated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📍 Crowd Heatmap</Text>

      <ImageBackground
        source={require("../assets/heatmap.png")}
        style={styles.map}
        imageStyle={{ borderRadius: 10 }}
      >
        {points.map((point, index) => (
          <View
            key={index}
            style={[
              styles.marker,
              point.density === "high"
                ? styles.high
                : point.density === "medium"
                ? styles.medium
                : styles.low,
              { top: point.y, left: point.x },
            ]}
          />
        ))}
      </ImageBackground>

      <TouchableOpacity style={styles.button} onPress={refreshHeatmap}>
        <Text style={styles.btnText}>🔄 Refresh Heatmap</Text>
      </TouchableOpacity>

      <Text style={styles.caption}>
        (Prototype demo — real app me CCTV & IoT sensor data connect hoga)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0f24", padding: 15 },
  title: { fontSize: 22, color: "#fff", marginBottom: 15, textAlign: "center" },
  map: { flex: 1, resizeMode: "cover", justifyContent: "flex-start" },
  marker: {
    width: 18,
    height: 18,
    borderRadius: 9,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#fff",
  },
  high: { backgroundColor: "red" },
  medium: { backgroundColor: "orange" },
  low: { backgroundColor: "green" },
  button: {
    marginTop: 10,
    padding: 12,
    backgroundColor: "#2563eb",
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontSize: 16 },
  caption: { color: "#9ca3af", marginTop: 10, fontSize: 12, textAlign: "center" },
});
