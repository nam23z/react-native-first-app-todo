// import { Stack } from "expo-router";
import AppNavigation from "../components/navigation/app.navigation"
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { OpenSans_Regular } from "@/constants/font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded, error] = useFonts({
    [OpenSans_Regular]: require('../assets/fonts/OpenSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
    <AppNavigation/>
    </SafeAreaView>
  );
}
