import React from "react";
import { View, Image, StyleSheet } from "react-native";

import ListItem from "../components/list/ListItem";

import colors from "../config/colors";

function ListingDetailsScreen(title, price, image, subTitle, name) {
  return (
    <View>
      <Image style={styles.image} srouce={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{price}</AppText>
        <view style={styles.userContainer}>
          <ListItem image={image} title={name} subTitle={subTitle} />
        </view>
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
