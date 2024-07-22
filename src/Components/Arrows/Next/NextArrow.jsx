import styles from "/src/Components/Arrows/Next/NextArrow.module.css"

export default function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <>
            <button
                className={className}
                style={{...style}}
                onClick={onClick}>
                Next
            </button>
        </>
    )
}