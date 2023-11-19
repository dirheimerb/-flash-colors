import { RGB, XYZ } from '@flash/types';

/**
 * @function rgb2xyz
 * @description Converts an RGB object to an XYZ object
 * @param {RGB} rgb - RGB object to convert
 * @returns {XYZ} - XYZ object
 */
function rgb2xyz(rgb: RGB): XYZ {
  let r = rgb.r / 255;
  let g = rgb.g / 255;
  let b = rgb.b / 255;

  // assume sRGB
  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

  const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
  const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
  const xyz = {
    x: x * 100,
    y: y * 100,
    z: z * 100
  };
  return xyz;
}

export default rgb2xyz;
