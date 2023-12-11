import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../../utils";

const FloatingButton = ({ navigateTo }) => {
  const [pressed, setPressed] = useState(false);
  const [icon_1] = useState(new Animated.Value(40));
  const [icon_2] = useState(new Animated.Value(40));
  const [icon_3] = useState(new Animated.Value(40));

  const [pop, setPop] = useState(false);

  const popIn = () => {
    setPop(true);
    Animated.timing(icon_1, {
      toValue: 130,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 110,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 130,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const popOut = () => {
    setPop(false);
    Animated.timing(icon_1, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      <Animated.View style={[styles.circle, { bottom: icon_1 }]}>
        <TouchableOpacity
          onPress={() => {
            // pop === false ? popIn() : popOut();
            navigateTo("ProfileStats");
            // setPressed(!pressed);
          }}
        >
          <Icon name="line-chart" size={25} color="#FFF" />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_2, right: icon_2 }]}>
        <TouchableOpacity>
          <MaterialCommunityIcon
            name="source-repository-multiple"
            size={25}
            color="#FFF"
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          styles.circle,
          {
            right: icon_3,
            backgroundColor: colors.redDark,
          },
        ]}
      >
        <TouchableOpacity>
          <MaterialCommunityIcon
            name="logout"
            size={25}
            color={colors.grey10}
          />
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          pop === false ? popIn() : popOut();
          setPressed(!pressed);
        }}
      >
        {pressed ? (
          <Icon name="close" size={25} color="#FFF" />
        ) : (
          <Ionicons name="menu" size={25} color="#FFF" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: colors.primary5,
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 40,
    right: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
