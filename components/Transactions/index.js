import styles from './transactions.module.css'
import {RiRefreshLine} from 'react-icons/ri'
import {IoReturnDownBack} from 'react-icons/io'
import {IoReturnUpForwardOutline} from 'react-icons/io'

function Transaction({text, time, value, status, icon,statusSt, bgClass }) {
 
  return (
    <>
        <div className={styles.rtItem}>
            <div className={styles.rtLarge}>
                <div className={bgClass}>
                <div className={styles.iconDiv}>
                   {icon}
                </div>
                </div>
                <div className={styles.mainDiv}>
                    <p>{text}</p>
                    <small>{time}</small>
                </div>
            </div>
            <div className={styles.moneyDiv}>
                <p>{value}</p>
                <small className={statusSt}>{status}</small>
            </div>

      
        </div>
    </>


  )
}

export default Transaction