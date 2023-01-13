import styles from '../styles/Settings.module.css'
import Layout from '../components/Layouts'
import Link from 'next/link'
import {FaUserAlt, FaBell} from "react-icons/fa"
import {GiPadlock} from "react-icons/gi"
import {MdOutlineVerified} from "react-icons/md"
import {FiChevronLeft} from "react-icons/fi"
import {AiFillCamera} from "react-icons/ai"
import ActiveLink from '../components/Active'
import {BsCaretDownFill} from 'react-icons/bs'



function settings() {
  return (
    <>
        <Layout path='Settings'>
        <h3 className={styles.pageHeader}>Account Settings</h3>
        <div className={styles.aContainer}>
            <div className={styles.pCard}>
              <ActiveLink href='/settings' activeClassName={styles.active}>
            <Link href='' className= {styles.btn}> 
                  <div className={styles.btnB}>

                    <FaUserAlt /> 
              
                    <p>Profile </p> 
                </div>
              
                </Link>
                </ActiveLink>
                <Link href='' className= {styles.btn}> 
                  <div className={styles.btnB}>

                    <GiPadlock /> 
              
                    <p>Password </p> 
                  </div>
              
                </Link>
                <Link href='' className= {styles.btn}> 
                  <div className={styles.btnB}>

                    <FaBell /> 
              
                    <p>Notifications </p> 
                </div>
              
                </Link>
                <Link href='' className= {styles.btn}> 
                  <div className={styles.btnB}>

                    <MdOutlineVerified /> 
              
                    <p>Verifications </p> 
                  </div>
              
                </Link>
                
            </div>
            <div className={styles.pCardInfo}>
                <div className={styles.top}>
                    <Link href='' className={styles.gBack}>
                    <FiChevronLeft className={styles.iconDiv}/>  <p>Go back</p>
                    </Link>
                    <h3 className={styles.pageHeader}>Edit Profile</h3>
                </div>

                <div className={styles.profileP}>
                    <img src="profilePic.jpeg" alt="" />
                    <div className={styles.changeP}>
                        <AiFillCamera className={styles.iconDiv}/>
                        <p>Change Photo</p>
                    </div>
                    <div className={styles.removeP}>
                        <p>Remove</p>
                    </div>

                </div>
                <form>
                    <div className={styles.formGroup}>
                        <label>Full Name</label>
                        <input type='text' placeholder='TassyOmah' />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Email Address</label>
                        <input type='email' placeholder='queenOmah@gmail.com' />
                    </div>
                    <div className={styles.formGroup}>
                    <div className={styles.convertBox}>
                      <div className={styles.currency}>
                      <img src='/imgs/indo.png' alt="flag" />
                      <p>+62</p>
                      <BsCaretDownFill/>

                      </div>

                      <input type="number" placeholder='70 5994 5432 56'/>
                    </div>
                    </div>

                    <button className={styles.btnS} disabled> Save Changes</button>
                </form>
            </div>
        </div>
        </Layout>
    </>
  )
}

export default settings