import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
const { Stack } = require('expo-router');
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
	const [fontsLoaded] = useFonts({
		GraphikLight: require('../assets/fonts/GraphikLight.otf'),
		GraphikRegular: require('../assets/fonts/GraphikRegular.otf'),
		GraphikMedium: require('../assets/fonts/GraphikMedium.otf'),
		GraphikSemibold: require('../assets/fonts/GraphikSemibold.otf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) return null;

	return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
