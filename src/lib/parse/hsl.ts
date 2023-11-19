import { extractComponents } from './extractComponents';
import { clamp } from '../clamp';
import { HSL } from '@flash/types';
/**
 * @function parseHslComponent
 * @description Parse a single HSL component
 * @param {string} component
 * @param {number} index
 * @returns {number}
 */
export function parseHslComponent(
  component: string,
  index: number
): number {
  const value = parseFloat(component);

  switch (index) {
    case 0:
      return clamp(value, 0, 360);
    case 1:
    case 2:
      return clamp(value, 0, 100);
    case 3:
      return clamp(value, 0, 1);
    default:
      throw new Error('Invalid component index');
  }
}
/**
 * @function hsl
 * @description Parse an HSL color string
 * @param {string} color
 * @returns {HSL}
 */
function hsl(color: string): HSL {
  const c = extractComponents(color).map(parseHslComponent);
  const cc = {
    h: c[0],
    s: c[1],
    l: c[2]
  };
  return {
    h: cc.h,
    s: cc.s,
    l: cc.l
  };
}

export default hsl;
