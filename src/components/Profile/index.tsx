import Image from 'next/image'
import photo from '@/public/assets/profile.webp'
import profile from './Profile.module.scss'

type ProfileProps = {
  person: string
  scope: string
}

export default function Profile({ person, scope }: ProfileProps) {
  return (
    <div className={profile.container}>
      <figure className={profile.avatar}>
        <Image
          src={photo}
          priority={true}
          alt="Profile photo"
          layout="responsive"
        />
      </figure>
      <div className={profile.text}>
        <h1 className={profile.title}>{person}</h1>
        <h2 className={profile.scope}>{scope}</h2>
      </div>
    </div>
  )
}
