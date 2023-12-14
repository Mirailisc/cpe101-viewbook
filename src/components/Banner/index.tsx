import styles from './index.module.scss'

type Props = {
  image: string
}

const Banner: React.FC<Props> = ({ image }: Props): JSX.Element => {
  return (
    <div className={styles.banner}>
      <img src={image} alt="banner" />
    </div>
  )
}

export default Banner
