import { StatusBar } from "react-native";

const StatusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default StatusBarHeight;
