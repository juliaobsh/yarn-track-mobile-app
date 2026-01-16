import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { images } from '../../constants';
import { StatusBar } from "expo-status-bar";

const Onboarding3 = () => {
  return (
    <SafeAreaView className="bg-[#F9F4FB] h-full justify-center items-center px-4">
        <StatusBar style="dark" />
        <Image
            source={images.onboarding3}
            pointerEvents="none"
            className=" w-auto h-auto"
            resizeMode="contain"
        />
        <Text className="text-black text-2xl font-pbold mb-4 text-center">Get Insights and Statistics on Your Work</Text>
        <Text className="text-black text-sm font-pregular mb-4 text-center">Get detailed insights and statistics on your crochet work, such as time spent, yarn used, and project types.</Text>
        <CustomButton
            title="Get Started"
            handlePress={() => router.replace("/(tabs)/home")}
            containerStyles="bg-purple-300 w-full mt-4 absolute bottom-[40px]"
            textStyles="text-white"
        />
    </SafeAreaView>
  )
}

export default Onboarding3