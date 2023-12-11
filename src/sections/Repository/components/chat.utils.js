export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
export const generateUniqueRandomColorFromList = (() => {
  let shuffledColors = shuffleArray([
    "#1ec9d9",
    "#686ef2",
    "#f7ba19",
    "#ed3c37",
    "#f05b24",
  ]);
  let currentIndex = 0;

  return () => {
    if (currentIndex >= shuffledColors.length) {
      // If all colors have been used, reshuffle the array
      shuffledColors = shuffleArray(shuffledColors);
      currentIndex = 0;
    }

    // Return the next color in the shuffled array
    const currentColor = shuffledColors[currentIndex];
    currentIndex++;

    return currentColor;
  };
})();
