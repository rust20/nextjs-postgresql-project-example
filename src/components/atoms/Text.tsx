interface TextProps {
  children: React.ReactNode
  variant?: 'body' | 'label' | 'heading'
  className?: string
}

export default function Text({ children, variant = 'body', className = '' }: TextProps) {
  if (variant === 'heading') return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>
  if (variant === 'label') return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>
  return <p className={`text-base ${className}`}>{children}</p>
}
