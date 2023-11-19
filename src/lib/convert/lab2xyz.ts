import { LAB } from '@flash/types';
/**
 * @function lab2xyz
 * @description Converts an LAB object to an XYZ object
 * @param {LAB} lab - LAB object to convert
 * @returns {XYZ} - XYZ object
 */
function lab2xyz(lab: LAB): number[] {
  const l = lab.l,
    a = lab.a,
    b = lab.b;
  let x: number = 0;
  let y: number = 0;
  let z: number = 0;
  let y2: number = 0;

  if (l <= 8) {
    y = (l * 100) / 903.3;
    y2 = 7.787 * (y / 100) + 16 / 116;
  } else {
    y = 100 * Math.pow((l + 16) / 116, 3);
    y2 = Math.pow(y / 100, 1 / 3);
  }

  x =
    x / 95.047 <= 0.008856
      ? (x = (95.047 * (a / 500 + y2 - 16 / 116)) / 7.787)
      : 95.047 * Math.pow(a / 500 + y2, 3);

  z =
    z / 108.883 <= 0.008859
      ? (z = (108.883 * (y2 - b / 200 - 16 / 116)) / 7.787)
      : 108.883 * Math.pow(y2 - b / 200, 3);

  return [x, y, z];
}

export default lab2xyz;
