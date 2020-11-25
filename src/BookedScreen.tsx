import React from "react";
import { DATA } from "./data";
import { IPost } from "./../types/post";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "./components/AppHeaderIcon";
import { PostList } from "./components/PostList";

export const BookedScreen = ({ navigation }: { navigation: any }) => {
  const openPostHandler = (post: IPost) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  return (
    <PostList
      data={DATA.filter((post) => post.booked)}
      onOpen={openPostHandler}
    />
  );
};

BookedScreen.navigationOptions = ({ navigation }: { navigation: any }) => {
  return {
    headerTitle: "Избранное",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Drower"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};
