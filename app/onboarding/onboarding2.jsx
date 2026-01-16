import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { images } from '../../constants';
import { StatusBar } from "expo-status-bar";

const Onboarding2 = () => {
  return (
    <SafeAreaView className="bg-[#F9F4FB] h-full justify-center items-center px-4">
        <StatusBar style="dark" />
        <Image
            source={images.onboarding2}
            pointerEvents="none"
            className=" w-auto h-auto"
            resizeMode="contain"
        />
        <Text className="text-black text-2xl font-pbold mb-4 text-center">Track Current Progress of a Project</Text>
        <Text className="text-black text-sm font-pregular mb-4 text-center">Monitor your progress on specific projects with percentage completion, milestones, and deadlines.</Text>
        <CustomButton
            title="Next"
            handlePress={() => router.replace("/onboarding/onboarding3")}
            containerStyles="bg-purple-300 w-full mt-4 absolute bottom-[40px]"
            textStyles="text-white"
        />
    </SafeAreaView>
  )
}

export default Onboarding2