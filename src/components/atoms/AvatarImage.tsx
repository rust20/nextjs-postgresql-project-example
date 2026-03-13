interface AvatarImageProps {
  src: string
  alt: string
  size?: number
}

export default function AvatarImage({ src, alt, size = 96 }: AvatarImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  )
}
