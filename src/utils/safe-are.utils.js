import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import colors from "./colors";

export const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`};
  background-color: ${colors.primary10};
  position: relative;
`;
