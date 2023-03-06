import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserCircleIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Currently hiding the Home Screen Title
    });
  }, []);
  return (
    <SafeAreaView className="bg-white">
      {/* <Text className="text-red-600">HomeScreen</Text> */}
      <View className="flex-row pb-3 items-center justify-between">
        <View className="flex-row mx-4 space-x-2">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <Text className="font-bold text-xl">Hone Your Tone</Text>
        </View>

        <View>
          <UserCircleIcon size={30} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
