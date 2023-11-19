import { CMYK } from '@flash/types';
/**
 * @function cmyk2rgb
 * @description Converts a CMYK object to an RGB object
 * @param {CMYK} cmyk - CMYK object to convert
 * @returns {number[]} - RGB object
 * @example
 * cmyk2rgb({ c: 0, m: 0, y: 0, k: 100 }); // => [0, 0, 0]
 */
function cmyk2rgb(cmyk: CMYK): number[] {
  const c = cmyk.c / 100;
  const m = cmyk.m / 100;
  const y = cmyk.y / 100;
  const k = cmyk.k / 100;

  const r = 1 - Math.min(1, c * (1 - k) + k);
  const g = 1 - Math.min(1, m * (1 - k) + k);
  const b = 1 - Math.min(1, y * (1 - k) + k);

  return [r * 255, g * 255, b * 255];
}

export default cmyk2rgb;
