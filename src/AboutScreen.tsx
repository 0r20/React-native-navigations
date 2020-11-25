import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "./components/AppHeaderIcon";

export const AboutScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Это лучшее приложение для личных заметок!</Text>
      <Text>
        Текущая версия: <Text style={{ fontFamily: "ubuntu-bold" }}>1.0.0</Text>
      </Text>
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }: { navigation: any }) => ({
  headerTitle: "О приложении",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle drower"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
