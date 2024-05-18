import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { CardFormProps } from "@/app/screen/create-card";

interface CardHolderProps extends CardFormProps {}
export default function CardHolder({ value, setValue }: CardHolderProps) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Name on Card</Text>
      <TextInput
        style={[styles.input, styles.w100]}
        onChangeText={(text: string) =>
          setValue((prev) => ({ ...prev, cardHolder: text }))
        }
        value={value}
        placeholder="Ty Lee"
        keyboardType="numeric"
      />
    </View>
  );
}
