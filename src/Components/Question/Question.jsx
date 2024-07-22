import styles from "/src/Components/Question/Question.module.css"
import { Link } from "react-router-dom"

export default function Question() {

    return (
        <div className={styles.container}>
            <h2>💓 Do you want to be my girlfriend? 🫶</h2>
            <div className={styles.btn}>
                <Link to={`we-are-official-couple`}>Yes</Link>
                <Link to={`we-are-official-couple`}>Yes</Link>
            </div>
            <p className={styles.smallText}>
                There is no "no" option 🤣, this is the will of God. 🙌
            </p>
        </div>
    )
}