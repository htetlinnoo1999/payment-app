import { useNavigation } from "@react-navigation/core";
import { Button, SafeAreaView, StyleSheet, View } from "react-native";
import { StackParams } from "@/app/(tabs)/_layout";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Make Payments"
          onPress={() => navigation.navigate("Cards")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff", // Set the background color to white
  },
});
