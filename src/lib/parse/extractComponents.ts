const component = /-?\d+(\.\d+)?%?/g;
/**
 * @function extractComponents
 * @description Extracts the components of a color
 * @param {string} color - The color to extract components from
 * @returns {RegExpMatchArray} The components of the color
 */
export function extractComponents(color: string): RegExpMatchArray {
  const match = color.match(component);
  if (!match) {
    throw new Error(`Invalid color: ${color}`);
  }
  return match;
}
