import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../../../utils";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function SearchBox() {
  const [value, setValue] = useState(0);
  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value === 1
          ? withTiming(300, { duration: 500 })
          : withTiming(0, { duration: 500 }),
    };
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        bottom: 100,
      }}
    >
      <Animated.View
        style={[
          {
            width: 300,
            height: 50,
            backgroundColor: colors.primary5,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
          },
          animatedStyle,
        ]}
      >
        <TextInput
          style={{
            width: "85%",
          }}
          placeholder="Search"
        />
        <TouchableOpacity
          onPress={() => {
            if (animation.value === 1) {
              animation.value = 0;
              setValue(0);
            } else {
              animation.value = 1;
              setValue(1);
            }
          }}
        >
          {value === 1 ? (
            <AntDesign name="search1" size={30} color={colors.white} />
          ) : (
            <AntDesign name="close" size={30} color={colors.white} />
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
