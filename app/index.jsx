import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";

import { WhiteYarn } from "../constants/svgs";
import { images } from '../constants'
import CustomButton from "../components/CustomButton";

export default function App() {

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="w-full justify-center items-center min-h-[90vh] px-4">
                    <Image 
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode="contain"
                    />
                    <View pointerEvents="none">
                        <WhiteYarn width={380} height={300} /> 
                    </View>
                    {/*<Image 
                        source={images.whiteyarn}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode="contain"
                    />*/}

                    <View className="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center">YarnTrack
                        {/*<Text className="text-secondary-200">YarnTrack</Text>*/}
                        </Text>

                        {/*<Image 
                            source={images.path}
                            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                            resizeMode="contain"
                        />*/}
                    </View>

                    <Text className="text-sm font-pregular text-white mt-7 text-center" /*style={{ paddingHorizontal: 13 }}*/>
                        All your projects, all in one place
                    </Text>

                    <View className="relative z-10 w-full">
                        <CustomButton 
                            title="Continue"
                            handlePress={() => router.push('/sign-in')}
                            containerStyles="w-full mt-7"
                        />
                    </View>

                    <Image
                        source={images.vector1}
                        pointerEvents="none"
                        className="absolute bottom-[-100px] left-[-50px] w-[599] h-[251px]"
                        resizeMode="contain"
                    />

                    <Image
                        source={images.vector2}
                        pointerEvents="none"
                        className="absolute bottom-[-90px] left-0 w-[503] h-[203px]"
                        resizeMode="contain"
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#C095DD' style='light'/>
            
        </SafeAreaView>
    );
}
