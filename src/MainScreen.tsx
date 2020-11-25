import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Post } from "./components/Post";
import { DATA } from "./data";
import { IPost } from "./types/post";

export const MainScreen = ({ navigation }: { navigation: any }) => {
  const openPostHandler = (post: IPost) => {
    navigation.navigate("Post", { postId: post.id, date: post.date });
  };

  return (
    <View style={styles.center}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => {
          return <Post post={item} onOpen={openPostHandler} />;
        }}
      />
    </View>
  );
};

MainScreen.navigationOptions = () => {
  return { headerTitle: "Мой блог" };
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
