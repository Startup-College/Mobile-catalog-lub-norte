import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RoutesManager from "./src/routes/app.routes";

export default function App() {
  return (
    <>
      <RoutesManager />
      <StatusBar style="auto" translucent />
    </>
  );
}
