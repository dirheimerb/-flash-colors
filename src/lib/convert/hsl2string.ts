import { HSL, HSLA } from '@flash/types';

/**
 * @function hsl2string
 * @description Converts an HSL or HSLA object to a string
 * @param {HSL | HSLA} hsl - HSL or HSLA object to convert
 * @returns {string} - HSL or HSLA string
 * @example
 * hsl2string({ h: 0, s: 0, l: 0 }); // => 'hsl(10%, 5%, 100%)'
 */
function hsl2string(hsl: HSL | HSLA): string {
  let scheme = 'hsl';
  const hslValues = [
    Math.round(hsl.h) + '°',
    Math.round(hsl.s) + '%',
    Math.round(hsl.l) + '%'
  ];

  if ('a' in hsl) {
    scheme += 'a';
    hslValues.push(hsl.a.toString()); // Add alpha value if present
  }

  return `${scheme}(${hslValues.join(', ')})`;
}

export default hsl2string;
