import hsl from './hsl';
import hex from './hex';
import rgb from './rgb';
import hsl2rgb from '../convert/hsl2rgb';
import { RGB, HSL, HSLA } from '@flash/types';
/**
 * Convert RGB object to number array
 * @param rgbColor
 * @returns {number[]}
 */
function rgbToArray(rgbColor: RGB): number[] {
  return [rgbColor.r, rgbColor.g, rgbColor.b];
}
/**
 * @function hsl2rgbParse
 * @description Converts a hsl string to an array of RGB or RGBA values
 * @param {string} color - HSL string to convert
 * @returns {number[]} - Array of RGB or RGBA values
 */
export function hsl2rgbParse(color: string): number[] {
  const hslColor: HSL | HSLA = hsl(color);
  const r = hsl2rgb(hslColor);

  // convert hslColor to string
  const hslString = `${hslColor}`;
  if (hslString.length === 4) {
    r.push(hslColor.h, hslColor.s, hslColor.l);
  } else {
    r.push(hslColor.h, hslColor.s, hslColor.l);
  }
  return r;
}
/**
 * @interface Space2Parser
 * @description Interface for the space2parser object
 */
export interface Space2Parser {
  [key: string]: (color: string) => number[];
}
/**
 * @constant space2parser
 * @description Object containing all the space2parser functions
 * @type {Space2Parser}
 */
export const space2parser: Space2Parser = {
  '#': hex,
  hsl: hsl2rgbParse,
  rgb: (color: string) => rgbToArray(rgb(color)) // Convert RGB object to number array
};
/**
 * @function parse
 * @description Parse a color string
 * @param {string} color - Color string to parse
 * @returns {number[]} - Array of RGB or RGBA values
 */
export const parse = {
  hsl,
  hex,
  rgb: rgbToArray,
  hsl2rgbParse
};

export default parse;
