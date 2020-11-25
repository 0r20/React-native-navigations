import "react-native-gesture-handler";
import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { AppNavigation } from "./src/navigations/AppNavigations";

async function loadApplication() {
  await Font.loadAsync({
    "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log("Ошибка загрузки приложения: ", err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return <AppNavigation />;
}
