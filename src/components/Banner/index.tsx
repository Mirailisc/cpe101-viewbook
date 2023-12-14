import styles from './index.module.scss'

type Props = {
  image: string
}

const Banner: React.FC<Props> = ({ image }: Props): JSX.Element => {
  return <img className={styles.banner} src={image} alt="banner" />
}

export default Banner
