import styles from "/src/Components/Titles/Titles.module.css"

export default function Titles(props) {

    return(
        <div>
            <p className={styles.text}>{props.text}</p>
        </div>
    )
}