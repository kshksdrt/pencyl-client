export const colors = [
  { color: "primary", bg: "#5C6BC0", fg: "#f2f2f2" },
  { color: "secondary", bg: "#5C6BC0", fg: "#f2f2f2" },
  { color: "red", bg: "#FF7043", fg: "#f2f2f2" },
  { color: "purple", bg: "#AB47BC", fg: "#f2f2f2" },
  { color: "deep-purple", bg: "#7E57C2", fg: "#f2f2f2" },
  { color: "indigo", bg: "#5C6BC0", fg: "#f2f2f2" },
  { color: "blue", bg: "#42A5F5", fg: "#222222" },
  { color: "cyan", bg: "#26C6DA", fg: "#222222" },
  { color: "teal", bg: "#26A69A", fg: "#f2f2f2" },
  { color: "green", bg: "#66BB6A", fg: "#f2f2f2" },
  { color: "yellow", bg: "#D4E157", fg: "#222222" },
  { color: "orange", bg: "#FFA726", fg: "#f2f2f2" },
  { color: "gray", bg: "#BDBDBD", fg: "#f2f2f2" },
  { color: "blue-gray", bg: "#78909C", fg: "#f2f2f2" },
];

export function hexToRgb(bg: string, opacity = "1") {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(bg);
  if (!result) return null;

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `rgb(${r},${g},${b},${opacity})`;
}

export function getColorHex(colorName: string) {
  const color = colors.find((x) => x.color === colorName);
  if (color) return color
  return { color: "primary", bg: "#5C6BC0", fg: "#f2f2f2" }
}

export function getColorRgb(colorName: string, opacity = "1") {
  const color = colors.find((x) => x.color === colorName);
  if (color) return {
    color: color.color,
    bg: hexToRgb(color.bg, opacity),
    fg: hexToRgb(color.fg, opacity),
  }
  return { color: "primary", bg: hexToRgb("#5C6BC0"), fg: hexToRgb("#f2f2f2") }
}