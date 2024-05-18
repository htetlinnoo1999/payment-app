import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { CardFormProps } from "@/app/screen/create-card";

interface CardCvvProps extends CardFormProps {}
export default function CardCvv({ value, setValue }: CardCvvProps) {
  return (
    <View style={[styles.inputContainer, styles.w45]}>
      <Text style={styles.label}>CVV</Text>
      <TextInput
        style={[styles.input, styles.w100]}
        onChangeText={(text: string) => {
          text = text.replace(/[^0-9]/g, "");
          setValue((prev) => ({ ...prev, cvv: text }));
        }}
        value={value}
        maxLength={3}
        keyboardType="numeric"
      />
    </View>
  );
}
