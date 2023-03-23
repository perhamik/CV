import Image from 'next/image'
import styles from './portfolio.module.scss'
import bbros from '@/public/thumb/bbros.webp'
import redfox from '@/public/thumb/redfox.webp'
import Separator from '@/src/components/Separator'

type Project = {
  name: string
  releaseDate: string
  url: string
  summary: string
}

const getProjectPreview = (name: string) => {
  const _key = name.toLowerCase()

  if (_key.includes('bbros')) {
    return <Image src={bbros} alt="BBros" />
  } else {
    return <Image src={redfox} alt="RedFox" />
  }
}

export default function Portfolio({ projects }: { projects: Project[] }) {
  return projects.length > 0 ? (
    <>
      <div className={styles.container}>
        <h4 className={styles.title}>Recent projects</h4>
        <ul className={styles.list}>
          {projects.map((project) => {
            return (
              <li key={project.name} className={styles.list__item}>
                <p className={styles.summary}>{project.summary}</p>
                <a href={project.url} className={styles.link}>
                  <picture className={styles.preview}>
                    {getProjectPreview(project.name)}
                  </picture>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <Separator dark data-index={5} />
    </>
  ) : (
    <></>
  )
}
