import { Pressable, View, Text } from 'react-native';

interface Props {
	children: string;
	styleContainer?: string;
	styleText?: string;
	variant?: string;
}

function Button({
	variant = 'primary',
	children,
	styleContainer,
	styleText,
}: Props) {
	return (
		<View
			className={`bg-black px-[24px] py-[14px] rounded-lg ${styleContainer}`}>
			<Pressable>
				<Text className={`text-white font-medium text-[14px] ${styleText}`}>
					{children}
				</Text>
			</Pressable>
		</View>
	);
}

export default Button;
