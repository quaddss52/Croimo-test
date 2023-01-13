import styles from './converter.module.css'
import {BsCaretDownFill} from 'react-icons/bs'

function Converter({label1,label2,value,country,imgUrl}) {
  return (
    <>
        <div className={styles.converter}>
            <div className={styles.label}>
                <p>{label1}</p>
                <p className={styles.small}>{label2}</p>
            </div>
            <div className={styles.convertBox}>
              <input type="number"  value={value}/>
              <div className={styles.currency}>
                <img src={imgUrl} alt="flag" />
                <p>{country}</p>
                <BsCaretDownFill/>

              </div>

            </div>
        </div>
    </>
  )
}

export default Converter