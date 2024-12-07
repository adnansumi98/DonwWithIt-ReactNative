import React from "react";
import { View, Image, StyleSheet } from "react-native";

import ListItem from "../components/list/ListItem";
import AppText from "../components/AppText";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const { title, price, image } = route.params;

  return (
    <View>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
