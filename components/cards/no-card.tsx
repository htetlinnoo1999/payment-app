import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StackParams } from "@/app/(tabs)/_layout";
import { useNavigation } from "@react-navigation/core";

export default function NoCard() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={require("@/assets/images/credit-card.png")} />
      <Text style={[styles.mt17, styles.textNormal]}>No Cards Found</Text>
      <Text style={[styles.my14, styles.textNormal]}>
        We recommend adding a card for easy payment
      </Text>
      <TouchableOpacity onPress={() => navigation.push("CreateCard")}>
        <Text style={[styles.textNormal, styles.primary]}>Add New Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textNormal: {
    fontSize: 18,
    lineHeight: 25,
    textAlign: "center",
  },
  my14: {
    marginVertical: 14,
  },
  mt17: {
    marginTop: 17,
  },
  primary: {
    color: "#4AD8DA",
  },
});
