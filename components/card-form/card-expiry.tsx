import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { CardFormProps } from "@/app/screen/create-card";

interface CardExpiryProps extends CardFormProps {}
export default function CardExpiry({ setValue, value }: CardExpiryProps) {
  const handleChange = (text: string) => {
    let cleaned = text.replace(/[^\d]/g, "");

    setValue((prev) => {
      const { expires } = prev;
      // If the user has entered the month (2 digits), add "/"
      if (
        expires.length !== 3 &&
        cleaned.length === 2 &&
        !cleaned.includes("/")
      ) {
        cleaned = `${cleaned}/`;
      } else {
        cleaned = text;
      }
      return { ...prev, expires: cleaned };
    });
  };
  return (
    <View style={[styles.inputContainer, styles.w45]}>
      <Text style={styles.label}>Expiry date</Text>
      <TextInput
        style={[styles.input, styles.w100]}
        onChangeText={handleChange}
        value={value}
        placeholder="MM / YY"
        keyboardType="numeric"
        maxLength={5}
      />
    </View>
  );
}
