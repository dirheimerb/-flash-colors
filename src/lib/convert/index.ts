export * from './cmyk2rgb';
export * from './hsl2hsv';
export * from './hsl2rgb';
export * from './hsl2string';
export * from './hsv2hsl';
export * from './hsv2rgb';
export * from './hwb2rgb';
export * from './rgb2cmyk';
export * from './rgb2hsl';
export * from './rgb2hsv';
export * from './rgb2hwb';
export * from './rgb2xyz';
export * from './xyz2rgb';
export * from './xyz2lab';
export * from './lab2xyz';
export * from './lab2lch';
export * from './ich2lab';
export * from './lab2xyz';
export * from './rgb2grayscale';
export * from './rgb2string';
export * from './hwb2rgb';

export default {
  cmyk: {
    rgb: import('./cmyk2rgb')
  },
  hsl: {
    hsv: import('./hsl2hsv'),
    rgb: import('./hsl2rgb'),
    string: import('./hsl2string')
  },
  hsv: {
    hsl: import('./hsv2hsl'),
    rgb: import('./hsv2rgb')
  },
  hwb: {
    rgb: import('./hwb2rgb')
  },
  lab: {
    lch: import('./lab2lch'),
    xyz: import('./lab2xyz')
  },
  lch: {
    lab: import('./lab2xyz')
  },
  rgb: {
    cmyk: import('./rgb2cmyk'),
    hex: import('./rgb2hex'),
    hsl: import('./rgb2hsl'),
    hsv: import('./rgb2hsv'),
    hwb: import('./rgb2hwb'),
    lab: import('./rgb2lab'),
    xyz: import('./rgb2xyz'),
    grayscale: import('./rgb2grayscale'),
    string: import('./rgb2string')
  },
  xyz: {
    lab: import('./xyz2lab'),
    rgb: import('./xyz2rgb')
  }
};
