import { useNavigation } from "@react-navigation/core";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StackParams } from "@/app/(tabs)/_layout";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CardNumber from "@/components/card-form/card-number";
import CardHolder from "@/components/card-form/card-holder";
import CardExpiry from "@/components/card-form/card-expiry";
import CardCvv from "@/components/card-form/card-cvv";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Card } from "@/interfaces/card";
import CardStore from "@/store/card";

export interface CardFormProps {
  value: string;
  setValue: Dispatch<SetStateAction<Card>>;
}

export default function CreateCardScreen() {
  const [cardInfo, setCardInfo] = useState<Card>({
    cardNumber: "",
    cardHolder: "",
    expires: "",
    cvv: "",
  });
  const { addCard } = CardStore((state) => state);
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const handleAddCard = useCallback((cardInfo: Card) => {
    addCard(cardInfo);
    navigation.navigate("Cards");
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <CardNumber setValue={setCardInfo} value={cardInfo.cardNumber} />
        <CardHolder setValue={setCardInfo} value={cardInfo.cardHolder} />
        <View style={styles.row}>
          <CardExpiry setValue={setCardInfo} value={cardInfo.expires} />
          <CardCvv setValue={setCardInfo} value={cardInfo.cvv} />
        </View>
        <View style={styles.verifiedContainer}>
          <Image
            source={require("@/assets/images/verified-by-visa.png")}
            style={styles.verifiedIcon}
          />
          <Image
            source={require("@/assets/images/mastercard-secure-code.png")}
            style={styles.verifiedIcon}
          />
          <Image
            source={require("@/assets/images/omise.png")}
            style={styles.verifiedIcon}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleAddCard(cardInfo)}>
          <Text style={styles.buttonTitle}>Add Card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff", // Set the background color to white
  },
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  verifiedContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  verifiedIcon: {
    marginHorizontal: 10,
  },
  buttonContainer: {
    marginTop: "auto", // Push the button to the bottom
    backgroundColor: "#4AD8DA",
    marginBottom: 18,
    marginHorizontal: 22,
    borderRadius: 20,
  },
  buttonTitle: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 22,
    paddingVertical: 13,
  },
});
