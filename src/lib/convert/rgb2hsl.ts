import { RGB } from '@flash/types';
/**
 * @function rgb2hsl
 * @description Converts an RGB object to an HSL object
 * @param {RGB} rgb - RGB object to convert
 * @returns {HSL} - HSL object
 */
function rgb2hsl(rgb: RGB): number[] {
  const r = rgb.r / 255,
    g = rgb.g / 255,
    b = rgb.b / 255,
    min = Math.min(r, g, b),
    max = Math.max(r, g, b),
    delta = max - min;
  let h = 0,
    s = 0,
    l = 0;

  if (max == min) h = 0;
  else if (r == max) h = (g - b) / delta;
  else if (g == max) h = 2 + (b - r) / delta;
  else if (b == max) h = 4 + (r - g) / delta;

  h = Math.min(h * 60, 360);

  if (h < 0) h += 360;

  l = (min + max) / 2;

  if (max == min) s = 0;
  else if (l <= 0.5) s = delta / (max + min);
  else s = delta / (2 - max - min);

  return [h, s * 100, l * 100];
}

export default rgb2hsl;
