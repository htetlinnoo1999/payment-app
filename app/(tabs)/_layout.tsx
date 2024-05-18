import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/app/screen/home";
import CardScreen from "@/app/screen/card";
import { Text, TouchableOpacity } from "react-native";
import CreateCardScreen from "@/app/screen/create-card";

export type StackParams = {
  Home: any;
  Cards: any;
  CreateCard: any;
};

const Stack = createNativeStackNavigator<StackParams>();

function App() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerBackTitleVisible: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Cards"
        component={CardScreen}
        options={({ route, navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("CreateCard")}>
              <Text style={{ fontSize: 23, color: "#000000" }}>+</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="CreateCard"
        options={{ headerTitle: "" }}
        component={CreateCardScreen}
      />
    </Stack.Navigator>
  );
}

export default App;
