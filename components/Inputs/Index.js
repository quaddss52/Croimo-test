import styles from './input.module.css'
function Input({type, label, placeholder}) {
  return (
    <>
        
         <div className={styles.formGroup}>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </div>
    </>
  )
}

export default Input