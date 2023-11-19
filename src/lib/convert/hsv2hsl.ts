import { HSL, HSV } from '@flash/types';
/**
 * @function hsv2hsl
 * @description Converts an HSV object to an HSL object
 * @param {HSV} hsv - HSV object to convert
 * @returns {HSL} - HSL object
 * @example
 * hsv2hsl({ h: 0, s: 0, v: 0 }); // => { h: 0, s: 0, l: 0 }
 */
function hsv2hsl(hsv: HSV): HSL {
  const h = hsv.h;
  const s = hsv.s / 100;
  const v = hsv.v / 100;
  let sl: number = 0;
  let l: number = 0;

  l = (2 - s) * v;
  sl = s * v;
  sl /= l <= 1 ? l : 2 - l;
  sl = sl || 0;
  l /= 2;
  const hsl = {
    h: h,
    s: sl * 100,
    l: l * 100
  };
  return hsl;
}

export default hsv2hsl;
