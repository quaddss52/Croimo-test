import React from 'react'
import styles from '../../styles/Dashboard.module.css'
import Transaction from '../../components/Transactions'

function Transactions() {
  return (
    <>
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
                      action='exchange'/>
                   <Transaction text='Sent to $Crotag!' time='2:30pm, Today' value='$1,500' status='cancelled' action='send' />
                   <Transaction text='Funded Wallet' time='2:30pm, Today' value='$1,030' status='successful' action='fund' />
                   <Transaction text='Exchanged USD to CFA' time='5:06am, Today' value='$3,270' status='cancelled' />
                   <Transaction text='Exchanged USD to CFA' time='3:30pm, Today' value='$3,270' status='pending' />
                   <Transaction text='Received from $crotag!' time='2:50pm, Today' value='$1,510' status='succssful' action='fund' />
                   <Transaction text='Withdrawal' time='2:30pm, Today' value='$2,000' status='successful' action='send' />
                   <Transaction text='Withdrawal' time='2:30pm, Today' value='$1,005' status='pending' action={'send'}/>
                   <Transaction text='Funded Wallet' time='2:30pm, Today' value='$2,000' status='cancelled' action='fund' />
                   
                  </div>

                </div>
    </>
  )
}

export default Transactions