import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ListItem, ListItemSeperator } from "../components/list";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../Navigators/routes";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGE,
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <ListItem
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
        image={require("../assets/mosh.jpg")}
        style={{}}
      />
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
