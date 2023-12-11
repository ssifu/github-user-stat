import { View, Text } from "react-native";
import React, { useContext } from "react";
import styled from "styled-components/native";

import { GithubContext } from "../../context/context";
import PieChartComponent from "./components/pie.chart";
import BarChartComponent from "./components/bar.chart";
import { fonts, spacing } from "../../utils";

export default function Repos() {
  const { repos } = useContext(GithubContext);

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = {
        name: language,
        value: 1,
        stars: stargazers_count,
      };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .slice(0, 5);

  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { name, value: stargazers_count };
      total.forks[forks] = { name, value: forks };
      return total;
    },
    { stars: {}, forks: {} }
  );
  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <>
      <PieChartComponent chartData={mostUsed} />
      <BarChartComponent chartData={forks} />
    </>
  );
}
