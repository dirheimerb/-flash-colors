import { extractComponents } from './extractComponents';
import { clamp } from '../clamp';
import { RGB } from '@flash/types';

/**
 * @function parseRgbComponent
 * @param {string} component
 * @param {number} index
 * @returns {number}
 */
export function parseRgbComponent(
  component: string,
  index: number
): number {
  if (index < 3) {
    if (component.indexOf('%') != -1) {
      return Math.round(
        (255 * clamp(parseInt(component, 10), 0, 100)) / 100
      );
    } else {
      return clamp(parseInt(component, 10), 0, 255);
    }
  } else {
    return clamp(parseFloat(component), 0, 1);
  }
}
/**
 * @function rgb
 * @description Parse an RGB color string
 * @param {string} color
 * @returns {RGB}
 */
function rgb(color: string): RGB {
  const colors = extractComponents(color).map(parseRgbComponent);
  return {
    r: colors[0],
    g: colors[1],
    b: colors[2]
  };
}

export default rgb;
