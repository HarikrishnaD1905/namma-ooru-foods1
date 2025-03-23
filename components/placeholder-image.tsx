export default function PlaceholderImage({
  text,
  width,
  height,
  bgColor = "#955c28",
  textColor = "#ffffff",
}: {
  text: string
  width: number
  height: number
  bgColor?: string
  textColor?: string
}) {
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${bgColor}"/>
      <text x="50%" y="50%" fontFamily="Arial, sans-serif" fontSize="${Math.min(width, height) / 10}px" fill="${textColor}" textAnchor="middle" dominantBaseline="middle">${text}</text>
    </svg>
  `

  const encodedSvg = encodeURIComponent(svg)
  const dataUri = `data:image/svg+xml,${encodedSvg}`

  return dataUri
}

