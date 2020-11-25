import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "./components/AppHeaderIcon";
import { DATA } from "./data";
import { THEME } from "./theme";

export const PostScreen = ({ navigation }: { navigation: any }) => {
  const postId = navigation.getParam("postId");

  const post = DATA.find((item) => item.id === postId);

  const removeHandler = () => {
    Alert.alert(
      "Удаление поста",
      "Вы действительно хотите удалить пост?",
      [
        {
          text: "Отменить",
          style: "cancel",
        },
        {
          text: "Да",
          style: "destructive",
          onPress: () => console.log("Cancel Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      <Image source={{ uri: post?.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post?.text}</Text>
        <Button
          title="Удалить"
          onPress={removeHandler}
          color={THEME.DANGER_COLOR}
        />
      </View>
    </View>
  );
};

PostScreen.navigationOptions = ({ navigation }: { navigation: any }) => {
  const date = navigation.getParam("date");
  const booked = navigation.getParam("booked");
  const iconName = booked ? "ios-star" : "ios-star-outline";
  return {
    headerTitle: "Пост от " + new Date(date).toLocaleDateString(),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take star"
          iconName={iconName}
          onPress={() => console.log("Press photo")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    padding: 15,
  },
  title: {
    fontFamily: "ubuntu-bold",
    textAlign: "center",
    marginBottom: 15,
    fontSize: 24,
  },
});
