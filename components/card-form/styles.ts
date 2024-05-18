import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    color: "#333",
  },
  cardNumberRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIcons: {
    flexDirection: "row",
    marginLeft: 10,
  },
  cardIcon: {
    width: 35,
    height: 20,
    marginLeft: 5,
  },
  smallInputContainer: {
    flex: 1,
    marginBottom: 20,
  },
  smallInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  verifiedContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  verifiedIcon: {
    width: 50,
    height: 20,
    marginHorizontal: 10,
  },
  w100: {
    width: "100%",
  },
  w45: {
    width: "45%",
  },
  positionRelative: {
    position: "relative",
  },
});
