import Head from 'next/head'
import styles from '../../styles/Dashboard.module.css'
import Layout from '../../components/Layouts'
import CreditCard from '../../components/Creditcard'
import Wallet from './Wallet'
import QuickActions from './QuickActions'
import ConvertFunds from './ConvertFunds'
import SavedRec from './SavedRec'
import Transactions from './Transactions'



export default function Home() {
  return (
    <>
    <Head>
        <title>Croimo</title>
    </Head>
       <Layout path='Dashboard'>
          <h3 className={styles.pageHeader}>Welcome back, Omah</h3>
          <div className={styles.dContent}>
            <div>
              <div className={styles.post}>
                <Wallet/>
              </div>
              <div className={styles.post}>
                <QuickActions/>
              </div>
              <div className={styles.post}>
                <ConvertFunds/>
              </div>
              <div className={styles.post}>
                <SavedRec/>
              </div>   
            </div>
            <div>
                <CreditCard/>
                <Transactions/>
            </div>
          </div>
       </Layout>   
    </>
  )
}
