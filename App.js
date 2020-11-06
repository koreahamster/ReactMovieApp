import React, { useState } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // 메뉴 화면 전환을 위해서
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import Stack from "./navigation/Stack";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
const casheFonts = (fonts) =>
  fonts.map(
    (fonts) => Font.loadAsync(fonts) //폰트를 로드
  );

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://i.pinimg.com/originals/d1/39/0c/d1390c2ab7b1317a8f4351a21ec7ed20.jpg",
    ]);
    const fonts = casheFonts([Ionicons.font]);

    return Promise.all([...images, ...fonts]); // 캐쉬 한것을 프로미스로 리턴 해주어야함
  }; // 로드 해야 할 부분이 위에 다 들어가야함

  const onFinish = () => setIsReady(true);
  return isReady ? (
    <NavigationContainer>
      <Stack /> 
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
// NavigationContainer 안에 Stack 은 안에 어플의 이동방향 제어