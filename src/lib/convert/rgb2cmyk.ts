import { CMYK, RGB } from '@flash/types';

/**
 * @function rgb2cmyk
 * @description Converts an RGB object to a CMYK object
 * @param {RGB} rgb - RGB object to convert
 * @returns {CMYK} - CMYK object
 */
function rgb2cmyk(rgb: RGB): CMYK {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const k = Math.min(1 - r, 1 - g, 1 - b);
  const c = (1 - r - k) / (1 - k) || 0;
  const m = (1 - g - k) / (1 - k) || 0;
  const y = (1 - b - k) / (1 - k) || 0;
  const cmyk = {
    c: c * 100,
    m: m * 100,
    y: y * 100,
    k: k * 100
  };

  return cmyk;
}

export default rgb2cmyk;
