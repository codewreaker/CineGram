import React from "react";
import {
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width, height } = Dimensions.get("window");

const MovieCard = ({ item }) => {
  return (
    <View
      className="bg-white rounded-3xl"
      style={{
        width: width * 0.5,
        height: height * 0.32,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignSelf: "center",
      }}
    >
      <TouchableOpacity onPress={console.log}>
        <Text className="font-bold text-center">{item}</Text>
        <Image source={require("../assets/icon.png")} />
      </TouchableOpacity>
    </View>
  );
};

const Trending: React.FC<{
  type?: "movies" | "series";
  data: any[];
}> = ({ type = "movies", data }) => {
  return (
    <View className="mb-8">
      <Carousel
        data={data}
        width={width}
        height={height * 0.35}
        renderItem={MovieCard}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
      />
    </View>
  );
};

export default Trending;
