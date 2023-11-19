import { LAB } from '@flash/types';
/**
 * @function lab2lch
 * @description Converts an LAB object to an LCH object
 * @param {LAB} lab - LAB object to convert
 * @returns {LCH} - LCH object
 */
function lab2lch(lab: LAB): number[] {
  const l = lab.l,
    a = lab.a,
    b = lab.b;
  let hr = 0,
    h = 0,
    c = 0;

  hr = Math.atan2(b, a);
  h = (hr * 360) / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
}

export default lab2lch;
