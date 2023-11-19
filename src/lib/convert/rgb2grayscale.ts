import { RGB } from '@flash/types';
/**
 * @function rgb2grayscale
 * @description Converts an RGB object to grayscale
 * @param {RGB} rgb - RGB object to convert
 * @returns {number} - Grayscale value
 * @example
 * rgb2grayscale({ r: 0, g: 0, b: 0 }); // => 0
 */
function rgb2grayscale(rgb: RGB): number {
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}

export default rgb2grayscale;
