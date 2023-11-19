import { RGB } from '@flash/types';
/**
 * @function rgb2hsv
 * @description Converts an RGB object to an HSV object
 * @param {RGB} rgb - RGB object to convert
 * @returns {HSV} - HSV object
 */
function rgb2hsv(rgb: RGB): number[] {
  const r: number = rgb.r;
  const g: number = rgb.g;
  const b: number = rgb.b;
  const min: number = Math.min(r, g, b);
  const max: number = Math.max(r, g, b);
  const delta = max - min;
  let h: number = 0;
  let s: number = 0;
  let v: number = 0;

  if (max === 0) s = 0;
  else s = ((delta / max) * 1000) / 10;

  if (max == min) h = 0;
  else if (r == max) h = (g - b) / delta;
  else if (g == max) h = 2 + (b - r) / delta;
  else if (b == max) h = 4 + (r - g) / delta;

  h = Math.min(h * 60, 360);

  if (h < 0) h += 360;

  v = ((max / 255) * 1000) / 10;

  return [h, s, v];
}

export default rgb2hsv;
