import styles from './aside.module.css'
import {BsFillGridFill} from "react-icons/bs"
import {SiConvertio} from "react-icons/si"
import {RiWallet3Fill, RiUserShared2Fill} from "react-icons/ri"
import {AiOutlineTransaction, AiFillCreditCard, AiTwotoneSetting} from "react-icons/ai"
import Link from 'next/link'
import ActiveLink from '../Active'

function Aside() {
  return (
    <>
        <aside className={styles.aside}>
              <h3 className={styles.leadText}> Croimo</h3>
              <div className={styles.asideNav}>
                <ActiveLink href='/dashboard' activeClassName = {styles.active}>
                <Link href='/dashboard' className= {styles.btn}> 
                  <div className={styles.btnB}>

                    <BsFillGridFill /> 
              
                    <p>Dashboard </p> 
                  </div>
              
                </Link>

                </ActiveLink>
                <Link href='' className= {styles.btn}> 
                  <div className={styles.btnB}>

                    <SiConvertio /> 
              
                    <p>Convert Funds </p> 
                  </div>
              
                </Link>
                <Link href='' className= {styles.btn}> 
                  <div className={styles.btnB}>

                    <RiWallet3Fill /> 
              
                    <p>Wallets </p> 
                </div>
              
                </Link>
                <Link href='' className= {styles.btn}> 
                  <div className={styles.btnB}>

                    <AiOutlineTransaction /> 
              
                    <p>Transactions </p> 
                  </div>
              
                </Link>
                <Link href='' className= {styles.btn}> 
                  <div className={styles.btnB}>

                    <AiFillCreditCard /> 
              
                    <p>Cards & Recipients </p> 
                  </div>
              
                </Link>
                <ActiveLink href='/settings' activeClassName = {styles.active}>
                <Link href='/settings' className= {styles.btn}> 
                  <div className={styles.btnB}>

                    <AiTwotoneSetting /> 
              
                    <p>Settings </p> 
                  </div>
              
                </Link>
                </ActiveLink>
                <Link href='/' className= {styles.btn}> 
                  <div className={styles.btnB}>

                    <RiUserShared2Fill /> 
              
                    <p>Logout </p> 
                  </div>
              
                </Link>
              
              
              </div>
            </aside>
    </>
  )
}

export default Aside