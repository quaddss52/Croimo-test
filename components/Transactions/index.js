import styles from './transactions.module.css'
import {RiRefreshLine} from 'react-icons/ri'
import {TfiBackLeft} from 'react-icons/tfi'
import {RiShareForwardLine} from 'react-icons/ri'

function Transaction({text, time, value, status, icon,action }) {
 
    // const getStatusColor = ()=>{
    //     if (status === 'pending') {
    //         return 'orange'
    //     } else if(status === 'cancelled'){
    //         return 'red'
    //     }else{
    //         return 'green'
    //     }
    // }

    let statusColor = 'green'
    if(status === 'pending') {
        statusColor = 'orange'
    }
    if(status === 'cancelled') {
        statusColor = 'red'
    }

    let Icon = RiRefreshLine
    if(action === 'send') {
        Icon = TfiBackLeft
    }
    if(action === 'fund') {
        Icon = RiShareForwardLine
    }

    let iconColor = '#626794'
    if(action === 'send') {
        iconColor = '#f1171f'
    }
    if(action === 'fund') {
        iconColor = '#43a39d'
    }

  return (
    <>
        <div className={styles.rtItem}>
            <div className={styles.rtLarge}>
                <div>
                <div className={styles.iconDiv}  style={{ background: `${iconColor}24`}}>
                   <Icon color={iconColor} />
                </div>
                </div>
                <div className={styles.mainDiv}>
                    <p>{text}</p>
                    <small>{time}</small>
                </div>
            </div>
            <div className={styles.moneyDiv}>
                <p>{value}</p>
                <small style={{
                    color: statusColor
                }}>{status}</small>
            </div>

      
        </div>
    </>


  )
}

export default Transaction