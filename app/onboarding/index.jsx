import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { images } from '../../constants';
import { StatusBar } from "expo-status-bar";


export default function Onboarding() {
  return (
    <SafeAreaView className="bg-[#F9F4FB] h-full justify-center items-center px-4">
        <StatusBar style="dark" />
        <Image
            source={images.onboarding1}
            pointerEvents="none"
            className=" w-auto h-auto"
            resizeMode="contain"
        />
        <Text className="text-black text-2xl font-pbold mb-4 text-center">All Your Projects - All in One Place</Text>
        <Text className="text-black text-sm font-pregular mb-4 text-center">Easily document your completed and in-progress crochet projects with photos, notes, and patterns.</Text>
        <CustomButton
            title="Next"
            handlePress={() => router.replace("/onboarding/onboarding2")}
            containerStyles="bg-purple-300 w-full mt-4 absolute bottom-[40px]"
            textStyles="text-white"
        />
    </SafeAreaView>
  );
}
