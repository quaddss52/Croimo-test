import styles from '../../styles/Dashboard.module.css'
import {FaChevronCircleDown} from 'react-icons/fa'

function Wallet() {
  return (
    <>
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
    </>
  )
}

export default Wallet