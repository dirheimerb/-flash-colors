export * from './types';
import colors from './color-names/colors.json';
export * from './lib/clamp';
export * from './lib/clipboard';

export * from './lib/compose';
export * from './lib/mainConvert';
export * from './lib/convert';
export * from './lib/parse/extractComponents';
export * from './lib/parse/hex';
export * from './lib/parse/hsl';
export * from './lib/parse/rgb';
export function getColorNames(): string[] {
  return Object.keys(colors);
}

export function getColor(name: string) {
  const n = Object.values(colors);
  return n.map((color) => {
    if (color === name) {
      return color;
    }
  });
}
