import styles from './index.module.scss'

const Navbar: React.FC = (): JSX.Element => {
  return (
    <div className={styles.navbar}>
      <h1>CPE101</h1>
      <div className={styles.navlinks}>
        <a href="/">Home</a>
        <a href="/summary">Summary</a>
      </div>
    </div>
  )
}

export default Navbar
