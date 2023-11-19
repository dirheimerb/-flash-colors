# @flash/colors

A collection of color conversion functions.

## Installation

```sh
npm install flash-colors
```

## Usage

```ts
import { rgb2hsl } from 'flash-colors'

const [h, s, l] = rgb2hsl(255, 0, 0)
```

## API

### rgb2hsl(r: number, g: number, b: number): [number, number, number]

Converts an RGB color to HSL.

### hsl2rgb(h: number, s: number, l: number): [number, number, number]

Converts an HSL color to RGB.


### rgb2cmyk(r: number, g: number, b: number): [number, number, number, number]

Converts an RGB color to CMYK.

### cmyk2rgb(c: number, m: number, y: number, k: number): [number, number, number]

Converts a CMYK color to RGB.

### rgb2hex(r: number, g: number, b: number): string

Converts an RGB color to a hex string.

### hex2rgb(hex: string): [number, number, number]

Converts a hex string to an RGB color.

### rgb2hsv(r: number, g: number, b: number): [number, number, number]

Converts an RGB color to HSV.

### hsv2rgb(h: number, s: number, v: number): [number, number, number]

Converts an HSV color to RGB.

### rgb2hwb(r: number, g: number, b: number): [number, number, number]

Converts an RGB color to HWB.

### hwb2rgb(h: number, w: number, b: number): [number, number, number]

The reason for this is two-fold:

Alpha value is orthogonal to color. A color with 50% opacity, is still the same color if it had 100% opacity.
It is not clear how alpha values should be handled in some color spaces. For instance, does alpha make sense in CMYK space?
You must make effort to preserve alpha values between conversions yourself if this is important to you.

Missing conversions
Any conversions that are simple compositions of other conversions have been omitted.

For example, let's imagine we wanted to convert hsl to cmyk. This function doesn't exist, but it can be trivially created by composing hsl2rgb and rgb2cmyk:

```ts
import { hsl2rgb, rgb2cmyk } from 'flash-colors'

export function hsl2cmyk(h: number, s: number, l: number): [number, number, number, number] {
  return rgb2cmyk(...hsl2rgb(h, s, l))
}
```

This is a simple example, but there are many more complex conversions that can be created in this way. If you find yourself needing a conversion that is not provided, please open an issue or submit a PR.