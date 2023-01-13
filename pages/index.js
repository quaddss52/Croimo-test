import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Login.module.css'
import Input from '../components/Inputs/Index'
import Button from '../components/Button/Index'
function login() {
  return (
    <>
        <Head>
        <title>Croimo</title>
         </Head>
    <div className={styles.body}>

  <h3 className={styles.headerText}>Croimo</h3>
  <div className={styles.container}>
    {/* icon  */}
    <h3 className={styles.leadText}>Login</h3>
    <form>

    <Input type='email' label='Email'/>
    
    <Input type='password' label='Password'/>
    <p className={styles.forgotPassword}><a href="">Forgot Password?</a></p>
   <Link href='/dashboard'>

   <Button text='Login'/>
   </Link> 
    </form>

    


    <p>New to Croimo? <Link href="/register">Create an Account</Link></p>
  </div>

</div>



</>
  )
}

export default login