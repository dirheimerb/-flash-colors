import { HSL, HSV } from '@flash/types';

/**
 * @function hsl2hsv
 * @description Converts an HSL object to an HSV object
 * @param {HSL} hsl - HSL object to convert
 * @returns {HSV} - HSV object
 * @example
 * hsl2hsv({ h: 0, s: 0, l: 0 }); // => { h: 0, s: 0, v: 0 }
 */
function hsl2hsv(hsl: HSL): HSV {
  const h = hsl.h / 360;
  const s = hsl.s / 100;
  const l = hsl.l / 100;
  const sv = s * (l < 0.5 ? l : 1 - l);

  const v = l + sv;

  return {
    h: h, // Hue normalized to 0-1 range
    s: Math.round(v === 0 ? 0 : (200 * sv) / v),
    v: Math.round(100 * v)
  };
}

export default hsl2hsv;
