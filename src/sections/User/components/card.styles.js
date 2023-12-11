import styled from "styled-components/native";

export const CardComponent = styled.View`
  background: ${colors.white};
  padding: 16px;
  margin: 16px;
  position: relative;
`;

export const CardTag = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translateY(-20px);
  background: ${colors.white};
  color: ${colors.grey5};
  border-top-right-radius: ${spacing.radius};
  border-top-left-radius: ${spacing.radius};
  text-transform: capitalize;
  padding: 2px 16px;
`;

export const CardTagText = styled.Text`
  font-size: 16px;
  font-family: ${fonts.mono};
  letter-spacing: ${spacing.spacing};
  background: ${colors.white};
  color: ${colors.grey5};
`;
