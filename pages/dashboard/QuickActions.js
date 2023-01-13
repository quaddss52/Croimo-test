import styles from '../../styles/Dashboard.module.css'
import {IoIosSend} from 'react-icons/io'
import {MdAddCircle} from 'react-icons/md'

function QuickActions() {
  return (
    <div>
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
  )
}

export default QuickActions