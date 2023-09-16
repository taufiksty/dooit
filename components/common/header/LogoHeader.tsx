import { Image, Pressable, Text, View } from 'react-native';
import { images } from '../../../constants';

function LogoHeader() {
	return (
		<Pressable className="flex-row space-x-2">
			<Image
				source={images.logoHeaderLight}
				className="w-[32px] h-[27px]"
			/>
			<Text className="font-semibold text-[20px]">Dooit</Text>
		</Pressable>
	);
}

export default LogoHeader;
