import { Image, View } from "react-native";
import { styles } from "@/components/card-form/styles";

export default function CardType({ cardType }: { cardType: string | null }) {
  return (
    <>
      {cardType && (
        <View style={[styles.cardIcons, { position: "absolute", right: 20 }]}>
          {cardType === "visa" && (
            <Image
              source={require("@/assets/images/visa/md.png")}
              style={styles.cardIcon}
            />
          )}
          {cardType === "mastercard" && (
            <Image
              source={require("@/assets/images/mastercard/md.png")}
              style={styles.cardIcon}
            />
          )}
          {cardType === "jcb" && (
            <Image
              source={require("@/assets/images/jcb/md.png")}
              style={styles.cardIcon}
            />
          )}
        </View>
      )}
    </>
  );
}
