import { Stack } from 'expo-router';
import {
	Image,
	Platform,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import LogoHeader from '../../components/common/header/LogoHeader';
import IconBtn from '../../components/common/header/IconBtn';
import { images } from '../../constants';
import Button from '../../components/common/Button';
import { useState } from 'react';

function index() {
	const [activeTab, setActiveTab] = useState('all-list');

	function onClickTabHandler(tab: string) {
		setActiveTab(tab);
	}

	const styleContainerTabActive = 'bg-black z-10';
	const styleContainerTabInactive = 'bg-[#E5E5E5] z-0';
	const styleTextTabActive = 'text-white';

	return (
		<SafeAreaView className="flex-1">
			{/* <Header> */}
			<Stack.Screen
				options={{
					headerTitle: '',
					headerShadowVisible: false,
					headerLeft: () => <LogoHeader />,
					headerRight: () => <IconBtn icon={images.search} />,
				}}
			/>
			{/* </Header> */}

			{/* <Main> */}
			<View className="flex-1 px-6 items-center bg-white">
				{/* <TabToDo> */}
				<View className="mt-10 flex-row justify-between w-full relative">
					<TouchableOpacity
						onPress={() => onClickTabHandler('all-list')}
						className={`${
							activeTab === 'all-list'
								? styleContainerTabActive
								: styleContainerTabInactive
						} py-3 px-[70px] rounded-lg`}>
						<Text
							className={`${
								activeTab === 'all-list' ? styleTextTabActive : 'opacity-40'
							} font-medium text-base`}>
							All List
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => onClickTabHandler('pinned')}
						className={`${
							activeTab === 'pinned'
								? styleContainerTabActive
								: styleContainerTabInactive
						} py-3 px-[70px] rounded-lg -ml-8`}>
						<Text
							className={`${
								activeTab === 'pinned' ? styleTextTabActive : 'opacity-40'
							} font-medium text-base`}>
							Pinned
						</Text>
					</TouchableOpacity>
				</View>
				{/* </TabToDo> */}

				{/* <ImageEmptyToDo> */}
				<View className="mt-28">
					<Image
						source={images.blankToDo}
						resizeMode="contain"
						className="w-[384px] h-[203px]"
					/>
				</View>
				{/* </ImageEmptyToDo> */}

				{/* <BtnCreateToDo> */}
				<View className="mt-20 items-center">
					<Text className="font-semibold text-xl">
						Create your first to-do list...
					</Text>
					<Button
						styleContainer="mt-[28px]"
						styleText="text-base">
						+ New List
					</Button>
				</View>
				{/* </BtnCreateToDo> */}
			</View>
			{/* </Main> */}
		</SafeAreaView>
	);
}

export default index;

const styles = StyleSheet.create({
	tabActive: {
		elevation: 10,
	},
	tabInactive: {
		elevation: 0,
	},
});
