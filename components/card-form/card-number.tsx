import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { CardFormProps } from "@/app/screen/create-card";
import { formatCardNumber } from "@/utils/helper";
import useCardType from "@/hooks/useCardType";

interface CardNumberProps extends CardFormProps {}
const cardImages = {
  visa: require("@/assets/images/visa/md.png"),
  mastercard: require("@/assets/images/mastercard/md.png"),
  jcb: require("@/assets/images/jcb/md.png"),
};

export default function CardNumber({ setValue, value }: CardNumberProps) {
  const cardType = useCardType(value);
  const handleChange = (text: string) => {
    text = text.replace(/[^0-9]/g, "");
    const cardNumber = text.replace(/\s/g, "");
    const formattedNumber = formatCardNumber(cardNumber, false, "$1 ");
    setValue((prev) => ({
      ...prev,
      cardNumber: formattedNumber,
    }));
  };
  return (
    <View style={[styles.inputContainer, styles.positionRelative]}>
      <Text style={styles.label}>ATM/Debit/Credit card number</Text>
      <View style={styles.cardNumberRow}>
        <TextInput
          value={value}
          onChangeText={handleChange}
          style={[styles.input, styles.w100]}
          placeholder="0000 0000 0000 0000"
          placeholderTextColor="#999"
          keyboardType="numeric"
          maxLength={19}
        />
        {cardType && (
          <View style={[styles.cardIcons, { position: "absolute", right: 20 }]}>
            <Image source={cardImages[cardType]} style={styles.cardIcon} />
          </View>
        )}
      </View>
    </View>
  );
}
