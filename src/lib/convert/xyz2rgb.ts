import { XYZ } from '@flash/types';

/**
 * @function xyz2rgb
 * @description Converts an XYZ object to an RGB object
 * @param {XYZ} xyz - XYZ object to convert
 * @returns {number[]} - RGB object
 * @example
 * xyz2rgb({ x: 0, y: 0, z: 0 }); // => [0, 0, 0]
 */
function xyz2rgb(xyz: XYZ): number[] {
  const x = xyz.x / 100;
  const y = xyz.y / 100;
  const z = xyz.z / 100;

  let r: number;
  let g: number;
  let b: number;

  r = x * 3.2406 + y * -1.5372 + z * -0.4986;
  g = x * -0.9689 + y * 1.8758 + z * 0.0415;
  b = x * 0.0557 + y * -0.204 + z * 1.057;

  // assume sRGB
  r =
    r > 0.0031308
      ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055
      : (r = r * 12.92);

  g =
    g > 0.0031308
      ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055
      : (g = g * 12.92);

  b =
    b > 0.0031308
      ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055
      : (b = b * 12.92);

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return [r * 255, g * 255, b * 255];
}

export default xyz2rgb;
