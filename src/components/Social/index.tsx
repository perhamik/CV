import styles from './Social.module.scss'

type SocialNetwork = {
  network: string
  username: string
  url: string
}

type SocialProps = {
  social: Array<SocialNetwork>
}

export default function Social({ social }: SocialProps) {
  return (
    <div className={styles.social}>
      <h4 className={styles.social__title}>Social</h4>
      <div className={styles.social__list}>
        {social.map((single, key) => {
          return (
            <a
              href={single.url}
              key={key}
              target="_blank"
              aria-label={single.network}
              className={styles.social__item}
            >
              <i
                data-type={single.network.toLowerCase()}
                className={styles.social__item__icon}
              ></i>
            </a>
          )
        })}
      </div>
    </div>
  )
}
