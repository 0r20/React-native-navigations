import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const PostScreen = ({ navigation }: { navigation: any }) => {
  const postId = navigation.getParam("postId");

  return (
    <View style={styles.center}>
      <Text>{postId}</Text>
    </View>
  );
};

PostScreen.navigationOptions = ({ navigation }: { navigation: any }) => {
  const date = navigation.getParam("date");
  return { headerTitle: "Пост от " + new Date(date).toLocaleDateString() };
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
