import { LCH } from '@flash/types';
/**
 * @function lch2lab
 * @description Converts an LCH object to an LAB object
 * @param {LCH} lch - LCH object to convert
 * @returns {LAB} - LAB object
 */
function lch2lab(lch: LCH): number[] {
  const l = lch.l,
    c = lch.c,
    h = lch.h;
  let a = 0,
    b = 0,
    hr = 0;

  hr = (h / 360) * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
}

export default lch2lab;
