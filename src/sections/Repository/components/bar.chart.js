import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, Bar } from "victory-native";
import styled from "styled-components/native";
import { spacing } from "../../../utils";

export default function BarChartComponent({ chartData, color, stars }) {
  const data = chartData.map((item) => {
    const name = item.name.split("-").join("-\n");
    const value = item.value;
    return {
      label: name,
      value,
    };
  });
  return (
    <ChartComponentContainer>
      <Heading>Most Popular {stars ? "Repos" : "Forks"}</Heading>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <VictoryChart
          width={Dimensions.get("window").width}
          theme={VictoryTheme.material}
        >
          <VictoryBar
            data={data}
            x=""
            y="value"
            alignment="middle"
            barWidth={25}
            style={{
              data: { fill: color },
              labels: { fontFamily: fonts.mono },
            }}
          />
        </VictoryChart>
      </ScrollView>
    </ChartComponentContainer>
  );
}

const ChartComponentContainer = styled.View`
  background: ${colors.white};
  margin: 16px 16px;
  position: relative;
`;

const Heading = styled.Text`
  margin-top: 16px;
  font-size: 20px;
  font-family: ${fonts.mono};
  font-weight: bold;
  align-self: center;
  letter-spacing: ${spacing.spacing};
  background: ${colors.white};
  color: ${colors.grey5};
`;
