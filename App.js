import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import RoutesManager from "./src/routes/app.routes";
import { GlobalStyles } from "./src/styles/styles";

export default function App() {
  return (
    <>
      <ThemeProvider theme={GlobalStyles}>
        <StatusBar style="auto" translucent />
        <RoutesManager />
      </ThemeProvider>
    </>
  );
}
