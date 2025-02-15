import { Button, Image, Text } from "@/trendui";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  const handleSignUpPress = () => {
    console.log("Sign up pressed");
  };

  const handleGooglePress = () => {
    console.log("Google sign in pressed");
  };

  const handleApplePress = () => {
    console.log("Apple sign in pressed");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center px-6 gap-12">
        <View>
          <View className="items-center mb-6">
            <Image
              src="https://www.trendui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvr.42a3d9ed.jpg&w=828&q=75"
              width={120}
              height={120}
              className="rounded-xl"
            />
          </View>

          <Text className="text-center font-bold text-2xl text-black">
            Welcome to Trend UI
          </Text>
        </View>

        <View className="gap-4">
          <Button
            value="Sign up"
            className="bg-blue-500 rounded-lg p-4 items-center"
            onPress={handleSignUpPress}
            textStyle={{ color: "white" }}
          />

          <Button
            value="Continue with Google"
            className="flex-row items-center justify-center p-3 rounded-lg bg-white text-black shadow-md gap-4"
            onPress={handleGooglePress}
            icon={
              <Image
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                width={25}
                height={25}
              />
            }
          />

          <Button
            value="Continue with Apple"
            className="flex-row items-center justify-center p-3 rounded-lg bg-white text-black shadow-md gap-4"
            onPress={handleApplePress}
            icon={<MaterialIcons name="apple" size={30} color="#000000" />}
          />

          <Link href={"/sign-in"}>
            <Text className="text-center text-blue-500 font-semibold text-base">
              Sign In
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
