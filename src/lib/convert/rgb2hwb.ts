import { RGB } from '@flash/types';
import rgb2hsl from './rgb2hsl';

/**
 * @function rgb2hwb
 * @description Converts an RGB object to an HWB object
 * @param {RGB} rgb - RGB object to convert
 * @returns {number[]} - HWB object
 */
function rgb2hwb(rgb: RGB): number[] {
  const r = rgb.r;
  const g = rgb.g;
  const b = rgb.b;
  const h = rgb2hsl(rgb)[0];
  const w = (1 / 255) * Math.min(r, Math.min(g, b));
  const bb = 1 - (1 / 255) * Math.max(r, Math.max(g, b));

  return [h, w * 100, bb * 100];
}

export default rgb2hwb;
