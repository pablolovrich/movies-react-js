import { FaSpinner } from 'react-icons/fa';
import styles from "./Spinner.module.css"

const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <FaSpinner size={60} className={styles.spinning} />
        </div >
    )
}

export default Spinner