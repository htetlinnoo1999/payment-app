import { Alert } from "react-native";
import omise from "omise-react-native";
import { OMISE_PUBLIC_KEY, OMISE_SECRET_KEY } from "@env";
import { CardWithToken } from "@/store/card/interface";

const useOmise = () => {
  if (!OMISE_PUBLIC_KEY || !OMISE_SECRET_KEY) {
    Alert.alert("Error", "Omise keys are missing in environment variables");
    return;
  }
  omise.config(OMISE_PUBLIC_KEY, OMISE_SECRET_KEY, "2024-05-22");

  const createToken = (cardInfo: CardWithToken) => {
    return omise.createToken({
      card: {
        name: cardInfo.cardHolder,
        number: cardInfo.cardNumber,
        security_code: Number(cardInfo.cvv),
        city: "Bangkok",
        expiration_month: Number(cardInfo.expires.split("/")[0]),
        expiration_year: Number(cardInfo.expires.split("/")[1]),
        postal_code: 10110,
      },
    });
  };

  return {
    createToken,
    omise,
  };
};

export default useOmise;
