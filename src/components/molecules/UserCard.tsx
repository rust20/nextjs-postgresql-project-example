import AvatarImage from '../atoms/AvatarImage'
import Text from '../atoms/Text'

interface UserCardProps {
  name?: string | null
  email?: string | null
  image?: string | null
}

export default function UserCard({ name, email, image }: UserCardProps) {
  return (
    <>
      {image && <AvatarImage src={image} alt={name ?? 'User avatar'} />}

      <br />
      <br />

      {name && <Text>username: {name}</Text>}
      {email && <Text>email: {email}</Text>}
    </>
  )
}
