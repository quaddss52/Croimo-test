import {HiWifi} from 'react-icons/hi'
import styles from './credit.module.css'


function CreditCard() {
  return (
    <>
         <div className={styles.creditCard}>
                  <div className={styles.upperCreditCard}>
                    <p>Virtual Card</p>
                    <HiWifi className={styles.uccIcon}/>
                  </div>
                  <div className={styles.midCreditCard}>
                    <p>4562</p>
                    <p>1122</p>
                    <p>4594</p>
                    <p>7852</p>
                  </div>
                  <div className={styles.lowerCreditCard}>
                    <div >
                      <p className={styles.fade}>Card Holder</p>
                      <p>Jack Peterson</p>
                    </div>
                    <div>
                      <p className={styles.fade}>Expires</p>
                      <p>11/12</p>
                    </div>
                    <div className={styles.xDetails}>
                      <img src='/mastercard.svg' alt="mastercard" />
                    </div>

                  </div>
                </div>
    </>

  )
}

export default CreditCard