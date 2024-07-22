import styles from "/src/Components/Verse/Verse.module.css"

export default function Verse(props) {

    return (
        <>
            <div className={styles.container}>
                <p className={styles.textVerse}>
                    {props.text}
                </p>
                <h4 className={styles.versePath}>
                    {props.path}
                </h4>
            </div>
        </>
    )
}