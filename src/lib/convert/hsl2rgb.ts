import { HSL } from '@flash/types';
/**
 * @function hsl2rgb
 * @description Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 * @param {HSL} hsl - The HSL color value
 * @returns {number[]} - The RGB representation
 * @example
 * hsl2rgb({ h: 0, s: 0, l: 0 }); // => [0, 0, 0]
 */
function hsl2rgb(hsl: HSL): number[] {
  const h = hsl['h'] / 360;
  const s = hsl['s'] / 100;
  const l = hsl['l'] / 100;
  let t1: number = 0;
  let t2: number = 0;
  let t3: number = 0;

  let val: number;

  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5) t2 = l * (1 + s);
  else t2 = l + s - l * s;
  t1 = 2 * l - t2;

  const rgb = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    t3 = h + (1 / 3) * -(i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;

    if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1) val = t2;
    else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else val = t1;

    rgb[i] = val * 255;
  }

  return rgb;
}

export default hsl2rgb;
