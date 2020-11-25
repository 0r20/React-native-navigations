import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const PostScreen = () => {
  return (
    <View style={styles.center}>
      <Text>PostScreen</Text>
    </View>
  );
};

PostScreen.navigationOptions = { headerTitle: "Пост номер 1" };

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
