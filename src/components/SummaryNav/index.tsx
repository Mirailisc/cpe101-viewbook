import styles from './index.module.scss'

const SummaryNav: React.FC = (): JSX.Element => {
  return (
    <div className={styles.navbar}>
      <a href="/summary">
        <button>Back</button>
      </a>
      <h1>CPE101</h1>
      <div className={styles.navlinks}>
        <a href="/">Home</a>
      </div>
    </div>
  )
}

export default SummaryNav
