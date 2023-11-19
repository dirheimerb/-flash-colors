import { XYZ } from '@flash/types';

/**
 * @function xyz2lab
 * @description Converts an XYZ object to an LAB object
 * @param {XYZ} xyz - XYZ object to convert
 * @returns {LAB} - LAB object
 */
function xyz2lab(xyz: XYZ): number[] {
  let x = xyz.x;
  let y = xyz.y;
  let z = xyz.z;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

  const l = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);

  return [l, a, b];
}

export default xyz2lab;
