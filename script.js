"use strict";
const colorPicker = document.querySelector("#colorvalue");
colorPicker.addEventListener("input", showSelectedColor);
// Getting a selected color from the user
function colorPicked() {}

// Showing a selected color - Delegator for following functions
function showSelectedColor() {
  let rgb = {
    r: hexToRgb(colorPicker.value).r,
    g: hexToRgb(colorPicker.value).g,
    b: hexToRgb(colorPicker.value).b,
  };

  let hsl = {
    h: RgbToHsl(rgb.r, rgb.g, rgb.b).h,
    s: RgbToHsl(rgb.r, rgb.g, rgb.b).s,
    l: RgbToHsl(rgb.r, rgb.g, rgb.b).l,
  };
  showColorBox();
  showHexColor();
  showRgbColor(rgb);
  showHslColor(hsl);
}

// Showing the color as a colored box in CSS
function showColorBox() {
  document.querySelector("#color-box").style.backgroundColor =
    colorPicker.value;
}

// Showing the color as HEX
function showHexColor() {
  document.querySelector("#HEX").textContent = `HEX: ${colorPicker.value}`;
}

// Showing the color as RGB
function showRgbColor(rgb) {
  document.querySelector(
    "#RGB"
  ).textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
}

// Showing the color as HSL
function showHslColor(hsl) {
  document.querySelector(
    "#HSL"
  ).textContent = `HSL: ${hsl.h}, ${hsl.s}%, ${hsl.l}%`;
}

// Converting HEX to RGB
function hexToRgb(hex) {
  let r = Number.parseInt(hex.substring(1, 3), 16);
  let g = Number.parseInt(hex.substring(3, 5), 16);
  let b = Number.parseInt(hex.substring(5, 7), 16);

  return { r, g, b };
}

// Converting RGB to CSS usable string, like rgb(100, 123, 192);
function RgbToCss() {}

// Converting RGB to HEX
function RgbToHex() {}

// Converting RGB to HSL
function RgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;
  h = h.toFixed();
  s = s.toFixed(0);
  l = l.toFixed(0);

  return { h, s, l };
}
