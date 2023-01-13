import Head from 'next/head'
import styles from '../styles/Dashboard.module.css'
import Layout from '../components/Layouts'
import {FaChevronCircleDown} from 'react-icons/fa'
import {IoIosSend} from 'react-icons/io'
import {MdAddCircle} from 'react-icons/md'
import Converter from '../components/Converter'
import {BiTransfer} from 'react-icons/bi'
import {HiWifi} from 'react-icons/hi'
import masterCard from '../public/next.svg'
import Transaction from '../components/Transactions'
import {RiRefreshLine} from 'react-icons/ri'
import {TfiBackLeft} from 'react-icons/tfi'
import {RiShareForwardLine} from 'react-icons/ri'
import CreditCard from '../components/Creditcard'



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
                <div className={styles.wallet}>
                  <div className={styles.cardSecondary}>
                    <div className={styles.upperCard}>
                      <div className={styles.firstC}>
                        <img src="imgs/flagAm.webp" alt="" />
                        USD Wallet balance
                      </div>
                      <FaChevronCircleDown className={styles.upperCardIcon}/>
                    </div>
                    <div className={styles.lowerCard}>
                        <h1> $ 31,627.80</h1>
                    </div>
                  </div>
                  <div className={styles.cardPrimary}>
                  <div className={styles.upperCard}>
                      <div className={styles.firstC}>
                        <img src="imgs/flagFra.webp" alt="" />
                        XOF Wallet balance
                      </div>
                      <FaChevronCircleDown className={styles.upperCardIcon}/>
                    </div>
                    <div className={styles.lowerCard}>
                        <h1>  &#x20A3; 150.30</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.post}>
                <h3 className={styles.pageHeader}>Quick Actions</h3>
                <div className={styles.quickA}>
                  <button className={styles.card1}>
                    <IoIosSend className={styles.cardIcon} /> Send Money
                  </button>
                  <button className={styles.card2}>
                    <MdAddCircle className={styles.cardIcon} /> Add Money
                  </button>
                </div>
              </div>
              <div className={styles.post}>
                <h3 className={styles.pageHeader}>Convert funds</h3>
                <div className={styles.card}>
                  <div className={styles.cfCard}>
                  <Converter label1={'You send'} label2={'United states dollar'} value={3400} country={'USD'} imgUrl={'/imgs/flagAm.webp'}/>
                  <BiTransfer className={styles.cfCardIcon}/>
                  <Converter label1={'Recipient receives'} label2={'French Franc CFA'} value={389} country={'FRA'} imgUrl={'/imgs/flagFra.webp'}/>
                  </div>
                  <p><strong>1</strong>USD = 23.45 CFA</p>
                  <div className={styles.buttonDiv}>
                  <button className={styles.cfButton}> Continue</button>
                  </div>
                </div>
              </div>
              <div className={styles.post}>
                <h3 className={styles.pageHeader}>Saved Recipients</h3>
                <div className={styles.srDiv}>
                  <div className={styles.card}>
                    <MdAddCircle className={styles.srDivIcon} />
                    <p>New <br /> Recipient</p>
                  </div>
                  <div className={styles.srDivC}>
                    <div className={styles.card}>
                      <img src="imgs/pfps/pfp1.jpeg" alt="pfp1" />
                      <p>Scarlett</p>
                      $cro tag

                    </div>
                    <div className={styles.card}>
                        <img src="imgs/pfps/pfp2.jpeg" alt="pfp1" />
                        <p>Nariya</p>
                        $cro tag
                    </div>
                    <div className={styles.card}>
                        <img src="imgs/pfps/pfp3.jpeg" alt="pfp1" />
                        <p>Riya</p>
                        $cro tag
                    </div>
                    <div className={styles.card}>
                        <img src="imgs/pfps/pfp4.jpeg" alt="pfp1" />
                        <p>Tassy O</p>
                        $cro tag
                    </div>
                  </div>
                </div>
              </div>
                
            </div>
            <div>
                <CreditCard/>
                <div className={styles.rtDiv}>
                  <h3 className={styles.pageHeader}>Recent Transactions</h3>
                  <p>View all</p>
                </div>
                <div className={styles.rTransactions}>
                  <div className={styles.card}>
                   <Transaction
                    text='Exchanged USD to CFa' 
                    time='2:30pm, Today'
                     value='$2,100'
                      status='pending' 
                      icon= {<RiRefreshLine/>}
                      statusSt = 'pending' 
                      bgClass='exchange'/>
                   <Transaction text='Sent to $Crotag!' time='2:30pm, Today' value='$1,500' status='cancelled' icon= {<TfiBackLeft/>}/>
                   <Transaction text='Funded Wallet' time='2:30pm, Today' value='$1,030' status='successful' icon= {<RiShareForwardLine/>}/>
                   <Transaction text='Exchanged USD to CFA' time='5:06am, Today' value='$3,270' status='cancelled' icon= {<RiRefreshLine/>}/>
                   <Transaction text='Exchanged USD to CFA' time='3:30pm, Today' value='$3,270' status='pending' icon= {<RiRefreshLine/>}/>
                   <Transaction text='Received from $crotag!' time='2:50pm, Today' value='$1,510' status='succssful' icon= {<RiShareForwardLine/>}/>
                   <Transaction text='Withdrawal' time='2:30pm, Today' value='$2,000' status='successful' icon= {<TfiBackLeft/>}/>
                   <Transaction text='Withdrawal' time='2:30pm, Today' value='$1,005' status='pending' icon= {<TfiBackLeft/>}/>
                   <Transaction text='Funded Wallet' time='2:30pm, Today' value='$2,000' status='cancelled' icon= {<RiShareForwardLine/>}/>
                   
                  </div>

                </div>
            </div>
          </div>
       </Layout>   
    </>
  )
}
