import React from 'react'
import {MdAddCircle} from 'react-icons/md'
import styles from '../../styles/Dashboard.module.css'
function SavedRec() {
  return (
    <>
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
    </>
  )
}

export default SavedRec