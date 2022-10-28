export const themeColors = {
  primary: '#0D0D0D',
  headerfont: '#86959E',
  pink: '#D64568',
  blue: '#5386E4',
  yellow: '#F4C95D',
  purple: '#5B2A86',
  white: '#FFFFFF',
  black: '#1C262C',
  hoverGrey: '#F3F5F8',
  red: '#D64568',
  secondary: `#E7E7E7`,
  violet:'#FBECF0',
  alert:'#DC3545',
};

export const themeFonSizes = {
  small: 11,
};

export const addAlpha = (color, opacity) => {
  var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
};
