import styles from './nav.module.css'
import { BsChevronDown} from "react-icons/bs"
import {BiHelpCircle, BiSearch} from 'react-icons/bi'
import {FaBell} from 'react-icons/fa'
import Link from 'next/link'

function Nav({path}) {
  return (
    <>
        <div className={styles.nav}>
                <div className={styles.pagePath}>
                  <p><span className={styles.faded}>Pages </span>/ {path}</p>
                </div>

                <form className={styles.searchBar} >
                  <BiSearch/>
                  <input type="text"  placeholder='Type here...' />
                </form>

                <div className={styles.help}>
                    <div className={styles.nHelp}>
                    <Link href='/dashboard' className= {styles.btn}> 
                      <div className={styles.btnB}>

                        <BiHelpCircle/> 
                  
                        <p>Need help?    </p> 
                      </div>
                    </Link>
                    </div>
                    <div className={styles.not}>
                      <FaBell/>
                    </div>
                </div>
                <div className={styles.profile}>
                  <img src="/profilePic.jpeg" alt="profile pic" />
                  <p>Tassy Omah </p>
                  <BsChevronDown/>
                </div>
            </div>
    </>
  )
}

export default Nav