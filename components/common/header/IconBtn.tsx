import { Image, Pressable, View } from 'react-native';

function IconBtn({ icon }: { icon: any }) {
	return (
		<Pressable>
			<Image
				source={icon}
				className="aspect-square w-[24px] h-[24px]"
			/>
		</Pressable>
	);
}

export default IconBtn;
