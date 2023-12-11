import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { PieChart } from "react-native-chart-kit";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";

import { fonts } from "../../../utils";
import { shuffleArray, generateUniqueRandomColorFromList } from "./chat.utils";

const ChartComponentContainer = styled.View`
  background: ${colors.white};
  margin-horizontal: 16px;
  margin-botton: 16px;
  position: relative;
`;

const Heading = styled.Text`
  margin-top: 16px;
  font-size: 20px;
  font-family: ${fonts.mono};
  align-self: center;
  letter-spacing: ${spacing.spacing};
  background: ${colors.white};
  color: ${colors.grey5};
`;

export default function PieChartComponent({ chartData }) {
  const [chartParentWidth, setChartParentWidth] = useState(0);

  const dynamicColors = chartData.map(() =>
    generateUniqueRandomColorFromList()
  );

  const dynamicData = chartData.map((item, index) => ({
    ...item,
    color: dynamicColors[index],
    // legendFontColor: dynamicColors[index],
    // legendFontSize: 15,
  }));

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 8,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };
  return (
    <ChartComponentContainer
      onLayout={({ nativeEvent }) =>
        setChartParentWidth(nativeEvent.layout.width)
      }
    >
      <Heading>Language</Heading>
      <PieChart
        data={dynamicData}
        width={chartParentWidth}
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(54, 64, 81, ${opacity})`,
        }}
        backgroundColor="transparent"
        accessor={"value"}
        hasLegend={false}
      />
      <View style={styles.legend}>
        {dynamicData.map((dataItem) => {
          const { name, value, color } = dataItem; // Destructure for clarity

          return (
            <View style={styles.legendItem} key={name}>
              <FontAwesome name="circle" size={24} color={color} />
              <View style={styles.legendItemValue}>
                <Text style={styles.textStyle}>{`${value}%`}</Text>
                <Text style={styles.textStyle}>{name}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </ChartComponentContainer>
  );
}

const styles = StyleSheet.create({
  legend: {
    marginHorizontal: 10,
    gap: 5,
    position: "absolute",
    right: 0,
    top: "25%",
  },
  legendItem: {
    flexDirection: "row",
    gap: 5,
  },
  legendItemValue: {
    marginHorizontal: 5,
    flexDirection: "row",
    gap: 5,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: fonts.mono,
  },
});
