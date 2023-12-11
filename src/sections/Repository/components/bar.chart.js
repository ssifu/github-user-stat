import { View, Text, Dimensions, ScrollView } from "react-native";
import React, { useState } from "react";
import { BarChart } from "react-native-chart-kit";
import AbstractChart from "react-native-chart-kit";
import styled from "styled-components/native";

import { shuffleArray, generateUniqueRandomColorFromList } from "./chat.utils";
import { fonts } from "../../../utils";

const ChartComponentContainer = styled.View`
  background: ${colors.white};
  margin: 16px 16px;
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

export default function BarChartComponent({ chartData }) {
  const [chartParentWidth, setChartParentWidth] = useState(0);
  const labels = chartData.map((data) => data.name);
  const values = chartData.map((data) => data.value);
  const dynamicColors = chartData.map(() =>
    generateUniqueRandomColorFromList()
  );

  const dynamicData = chartData.map((item, index) => ({
    ...item,
    color: dynamicColors[index],
    // legendFontColor: dynamicColors[index],
    // legendFontSize: 15,
  }));
  const data = {
    values,
    datasets: [
      {
        data: labels,
      },
    ],
  };
  return (
    <ChartComponentContainer
      onLayout={({ nativeEvent }) =>
        setChartParentWidth(nativeEvent.layout.height)
      }
    >
      <Heading>Most Popular</Heading>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
      >
        <ScrollView
          horizontal={true}
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        >
          <BarChart
            verticalLabelRotation={90}
            data={{
              labels,
              datasets: [
                {
                  data: values,
                },
              ],
            }}
            fromZero={true}
            width={Dimensions.get("window").width}
            height={Dimensions.get("window").height}
            chartConfig={{
              backgroundColor: "#ffff",
              backgroundGradientFrom: "white",
              backgroundGradientTo: "white",
              decimalPlaces: 0,
              color: () => `rgba(0, 0, 0, 0.5)`,
              fillShadowGradient: "#fb8c00", // THIS
              fillShadowGradientOpacity: 1, // THIS
              propsForLabels: {
                fontFamily: fonts.mono,
              },
            }}
          />
        </ScrollView>
      </ScrollView>
    </ChartComponentContainer>
  );
}
