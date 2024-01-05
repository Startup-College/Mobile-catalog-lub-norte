import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import Loading from "../screens/Loading";
import SignUp from "../screens/SignUp";

const AuthRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
