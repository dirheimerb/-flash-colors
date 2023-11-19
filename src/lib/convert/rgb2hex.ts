import { RGBA } from '@flash/types';
import { clamp } from '../clamp';

/**
 * @function componentToHex
 * @description Convert a single RGB component to a hex value
 * @param {number} c
 * @returns {string}
 */
function componentToHex(c: number): string {
  const value = Math.round(clamp(c, 0, 255));
  const hex = value.toString(16);

  return hex.length == 1 ? '0' + hex : hex;
}

/**
 * @function rgb2hex
 * @description Convert an RGB object to a hex string
 * @param {RGBA} rgb
 * @param {number} rgb.r - Red value
 * @param {number} rgb.g - Green value
 * @param {number} rgb.b - Blue value
 * @param {number} rgb.a - Alpha value
 * @returns {string}
 */
function rgb2hex(rgb: RGBA): string {
  const hex =
    componentToHex(rgb.r) +
    componentToHex(rgb.g) +
    componentToHex(rgb.b);
  const alpha = rgb.a !== undefined ? componentToHex(rgb.a) : '';

  return '#' + hex + alpha;
}

export default rgb2hex;
