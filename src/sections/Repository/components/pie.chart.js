import React, { useState } from "react";
import styled from "styled-components/native";

import { fonts } from "../../../utils";
import { VictoryPie, VictoryContainer } from "victory-native";

const ChartComponentContainer = styled.View`
  background: ${colors.white};
  margin: 16px;
  margin-botton: 16px;
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

export default function PieChartComponent({ chartData }) {
  const [chartParentWidth, setChartParentWidth] = useState(0);

  const data = chartData.map((item) => {
    const x = item.name;
    const y = item.value;
    return {
      x,
      y,
    };
  });

  return (
    <ChartComponentContainer
      onLayout={({ nativeEvent }) => {
        setChartParentWidth(nativeEvent.layout.width);
      }}
    >
      <Heading>Most Used Languages</Heading>

      <VictoryPie
        colorScale={["#1ec9d9", "#686ef2", "#f7ba19", "#ed3c37", "#f05b24"]}
        data={data}
        labels={({ datum }) => `${datum.x}\n${datum.y}%`}
        style={{ labels: { fontFamily: fonts.mono } }}
        width={chartParentWidth}
        labelPlacement="perpendicular"
        containerComponent={<VictoryContainer responsive={true} />}
      />
    </ChartComponentContainer>
  );
}
