// Note: Hexadecimal color string to RGB or RGBA array

/**
 * @module hex
 * @description
 * Converts a hex string to an array of RGB or RGBA values
 * @returns {string} - Array of RGB or RGBA values
 */
export function expand(hex: string): string {
  let result = '#';
  for (let i = 1; i < hex.length; i++) {
    const val = hex.charAt(i);
    result += val + val;
  }

  return result;
}
/**
 * @function hex
 * @description Converts a hex string to an array of RGB or RGBA values
 * @param {string} hex - Hex string to convert
 * @returns {number[]} - Array of RGB or RGBA values
 */
function hex(hex: string): number[] {
  // #RGB or #RGBA
  if (hex.length === 4 || hex.length === 5) {
    hex = expand(hex);
  }

  const rgb = [
    parseInt(hex.substring(1, 3), 16),
    parseInt(hex.substring(3, 5), 16),
    parseInt(hex.substring(5, 7), 16)
  ];

  // #RRGGBBAA
  if (hex.length === 9) {
    const alpha = parseFloat(
      (parseInt(hex.substring(7, 9), 16) / 255).toFixed(2)
    );
    rgb.push(alpha);
  }

  return rgb;
}

export default hex;
