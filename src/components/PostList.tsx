import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { IPost } from "../../types/post";
import { Post } from "./Post";

export const PostList = ({
  data,
  onOpen,
}: {
  data: IPost[];
  onOpen: (post: IPost) => void;
}) => {
  return (
    <View style={styles.center}>
      <FlatList
        data={data}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => {
          return <Post post={item} onOpen={onOpen} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
