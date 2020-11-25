import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Post } from "./components/Post";
import { DATA } from "./data";
import { IPost } from "./../types/post";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "./components/AppHeaderIcon";

export const MainScreen = ({ navigation }: { navigation: any }) => {
  const openPostHandler = (post: IPost) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
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
  return {
    headerTitle: "Мой блог",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take photo"
          iconName="ios-camera"
          onPress={() => console.log("Press photo")}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Drower"
          iconName="ios-menu"
          onPress={() => console.log("Press drower")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
