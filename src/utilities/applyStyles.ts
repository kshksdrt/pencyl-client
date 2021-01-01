const rootNodes = [
  "app",
  "modal",
  "overlay",
]

const themes = [
  "light",
  "dark",
]

export default function(theme: string) {
  console.log("Applying styles")
  rootNodes.forEach(id => {
    const node = document.getElementById(id)
    if (node) {
      let className = node.className;
      if (!className.includes("theme-content")) className = `theme-content ${className}`
      themes.forEach(t => className = className.replace(t, ""))
      className = `${className} ${theme}`
      className = className.replace(/  +/g, ' ');
      node.className = className
    }
  })
}