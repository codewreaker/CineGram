import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Trending from '../components/trending'
import { APP_NAME } from "../constants";
import { styles } from "../theme";

const secIconSize = 20;
const ios = (Platform.OS = "ios");

export default function HomeScreen() {
  const [title, setTitle] = useState<string>(APP_NAME);
  const [trending, setTrending] = useState<any[]>([1,2,3,4,5,6,7]);
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={`-mb-${ios ? 2 : 3}`}>
        <StatusBar style="auto" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon
            size={secIconSize}
            strokeWidth={2}
            color={"white"}
          />
          <Text className="text-white text-2xl font-bold">
            <Text style={styles.text} className="capitalize">{title[0]}</Text>
            {title.slice(1)}
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon
              size={secIconSize}
              strokeWidth={2}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Scroll Area */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <Trending type="movies" data={trending}/>
      </ScrollView>
    </View>
  );
}
