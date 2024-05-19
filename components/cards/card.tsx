import useCardType from "@/hooks/useCardType";
import { CardProps } from "@/interfaces/card";
import { formatCardNumber } from "@/utils/helper";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const cardImages = {
  visa: require("@/assets/images/visa/md.png"),
  mastercard: require("@/assets/images/mastercard/md.png"),
  jcb: require("@/assets/images/jcb/md.png"),
};

export default function Card({ cardInfo }: CardProps) {
  const cardType = useCardType(cardInfo.cardNumber);
  return (
    <TouchableOpacity
      style={styles.center}
      onPress={() => console.log("first")}
    >
      <View
        style={[
          styles.card,
          styles.w90,
          styles.shadowProp,
          styles.mx20,
          styles.my14,
        ]}
      >
        {cardType && <Image source={cardImages[cardType]} />}
        <Text style={[styles.cardNumber]}>
          {formatCardNumber(cardInfo.cardNumber.replace(/[^0-9]/g, ""))}
        </Text>
        <View style={styles.cardDetails}>
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.label}>Name on Card</Text>
            <Text style={styles.cardName}>{cardInfo.cardHolder}</Text>
          </View>
          <View style={{ marginRight: 20 }}>
            <Text style={styles.label}>Expires</Text>
            <Text style={styles.expiryDate}>{cardInfo.expires}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mx20: {
    marginHorizontal: 20,
  },
  my14: {
    marginVertical: 14,
  },
  w90: { width: "90%" },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 30,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardNumber: {
    marginTop: 20,
    letterSpacing: 2,
    color: "#808080",
    fontSize: 16,
    lineHeight: 21,
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20, // Adjust this value to position the details correctly
  },
  label: {
    color: "#8F8F8F",
    fontSize: 10,
    lineHeight: 14,
    marginBottom: 13,
  },
  cardName: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "bold",
  },
  expiryDate: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "bold",
  },
});
