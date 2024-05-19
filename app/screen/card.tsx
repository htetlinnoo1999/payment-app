import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import NoCard from "@/components/cards/no-card";
import Card from "@/components/cards/card";
import CardStore from "@/store/card";

export default function CardScreen() {
  const { cards } = CardStore((state) => state);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1 }}>
        {cards ? (
          <FlatList
            data={cards}
            renderItem={({ item }) => (
              <Card cardInfo={item} />
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContent}
          />
        ) : (
          <NoCard />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff", // Set the background color to white
  },
  listContent: {
    paddingBottom: 20, // Add some padding if needed
  },
});
