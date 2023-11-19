import { RGBA } from '@flash/types';

/**
 * @function rgb2string
 * @description Converts an RGB object to a string
 * @param {RGBA} rgb - RGB object to convert
 * @returns {string} - String representation of RGB object
 */
function rgb2string(rgb: RGBA): string {
  let scheme = 'rgb';
  const rgbValues = [
    Math.round(rgb.r),
    Math.round(rgb.g),
    Math.round(rgb.b)
  ];

  if ('a' in rgb) {
    scheme += 'a';
    rgbValues.push(rgb.a!); // Add alpha value if present
  }

  return `${scheme}(${rgbValues.join(',')})`;
}

export default rgb2string;
