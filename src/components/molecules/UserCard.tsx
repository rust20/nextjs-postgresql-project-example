import AvatarImage from '../atoms/AvatarImage'
import Text from '../atoms/Text'

interface UserCardProps {
  name?: string | null
  email?: string | null
  image?: string | null
}

export default function UserCard({ name, email, image }: UserCardProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      {image && <AvatarImage src={image} alt={name ?? 'User avatar'} />}
      {name && <Text variant="body">username: {name}</Text>}
      {email && <Text variant="body">email: {email}</Text>}
    </div>
  )
}
