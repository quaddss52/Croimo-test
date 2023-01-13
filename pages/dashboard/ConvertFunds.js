import styles from '../../styles/Dashboard.module.css'
import Converter from '../../components/Converter'
import {BiTransfer} from 'react-icons/bi'

function ConvertFunds() {
  return (
    <>
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
    </>
  )
}

export default ConvertFunds