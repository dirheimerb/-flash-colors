import { HWB } from '@flash/types';

/**
 * @function hwb2rgb
 * @description Converts an HWB object to an RGB object
 * @param {HWB} hwb - HWB object to convert
 * @returns {RGB} - RGB object
 */
function hwb2rgb(hwb: HWB): number[] {
  const h = hwb.h / 360;
  let wh = hwb.w / 100;
  let bl = hwb.b / 100;
  const ratio = wh + bl;
  // initialize rgb to 0 and declare variables
  let i = 0;
  let v = 0;
  let f = 0;
  let n = 0;
  let r = 0;
  let g = 0;
  let b = 0;

  // wh + bl cant be > 1
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;
  if ((i & 0x01) != 0) {
    f = 1 - f;
  }
  n = wh + f * (v - wh); // linear interpolation

  switch (i) {
    default:
    case 6:
    case 0:
      r = v;
      g = n;
      b = wh;
      break;
    case 1:
      r = n;
      g = v;
      b = wh;
      break;
    case 2:
      r = wh;
      g = v;
      b = n;
      break;
    case 3:
      r = wh;
      g = n;
      b = v;
      break;
    case 4:
      r = n;
      g = wh;
      b = v;
      break;
    case 5:
      r = v;
      g = wh;
      b = n;
      break;
  }

  return [r * 255, g * 255, b * 255];
}

export default hwb2rgb;
