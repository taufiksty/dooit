import { StatusBar } from 'expo-status-bar';
import { Image, Text, Pressable, View, SafeAreaView } from 'react-native';

import { images } from '../constants';
import { Stack, useRouter } from 'expo-router';

export default function App() {
	const router = useRouter();

	return (
		<SafeAreaView className="flex-1">
			<Stack.Screen options={{ headerShown: false }} />
			<View className="flex-1 bg-black items-center">
				<View className="basis-[85%] justify-center items-center space-y-10">
					<Image
						source={images.logoDark}
						resizeMode="contain"
						className="w-[68px] h-[55px]"
					/>
					<View className="w-[160px] space-y-3">
						<Text className="text-center text-white font-semibold text-4xl">
							Dooit
						</Text>
						<Text className="text-center text-[#C4C4C4] font-medium text-lg">
							Write what you need to do. Everyday.
						</Text>
					</View>
				</View>
				<View className="basis-[15%]">
					<Pressable
						onPress={() => router.push('/home')}
						className="bg-white rounded-3xl w-[200px] px-[64px] py-[16px]">
						<Text className="font-medium text-[16px]">Continue</Text>
					</Pressable>
				</View>
				<StatusBar style="auto" />
			</View>
		</SafeAreaView>
	);
}
