import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Login.module.css'
import Input from '../components/Inputs/Index'
import Button from '../components/Button/Index'
import {BsCaretDownFill} from 'react-icons/bs'
function register() {
  return (
    <>
        <Head>
        <title>Croimo</title>
         </Head>
    <div className={styles.body}>

  <h3 className={styles.headerText}>Croimo</h3>
  <div className={styles.container}>
    {/* icon  */}
    <h3 className={styles.leadText}>Create Account</h3>
    <form >
    <Input type='text' label='Full Name' />
    <Input type='email' label='Email Address'/>

    <p>Number</p>
    <div className={styles.convertBox}>
        <div className={styles.currency}>
          <img src='/imgs/indo.png' alt="flag" />
          <p>+62</p>
          <BsCaretDownFill/>

        </div>

        <input type="number"/>
    </div>
    <Input type='password' label='Password'/>
    <Link href='/dashboard'>
    <Button text='Create an Account'/>
    </Link>
    </form>

    <p>Already have account? <Link href="/">Sign in</Link></p>
  </div>

</div>



</>
  )
}

export default register