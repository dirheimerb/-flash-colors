import { HSV } from '@flash/types';
/**
 * @function hsv2rgb
 * @description Converts an HSV object to an RGB array
 * @param {HSV} hsv - HSV object to convert
 * @returns {number[] | undefined} - RGB array
 * @example
 * hsv2rgb({ h: 0, s: 0, v: 0 }); // => [0, 0, 0]
 */
function hsv2rgb(hsv: HSV): number[] | undefined {
  const h = hsv.h / 60;
  const s = hsv.s / 100;
  let v = hsv.v / 100;

  const hi = Math.floor(h) % 6;

  const f = h - Math.floor(h);
  const p = 255 * v * (1 - s);
  const q = 255 * v * (1 - s * f);
  const t = 255 * v * (1 - s * (1 - f));
  v = 255 * v;

  switch (hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
}

export default hsv2rgb;
