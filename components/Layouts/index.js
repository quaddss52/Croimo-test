import styles from './layout.module.css'
import Nav from '../Nav'
import Aside from '../Aside'

function Layout({children, path}) {
  return (
    <>
    <div className={styles.container}>
      <Aside />
      <main className={styles.main}>
        <Nav path={path}/>
        <div className={styles.children}>

        {children}
        </div>
      </main>
    </div>
    </>
  )
}

export default Layout