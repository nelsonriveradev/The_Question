import styles from '/src/Pages/Confirmation/Confirmation.module.css'
import Verse from '../../Components/Verse/Verse'
import Confetti from 'react-confetti'
import { useState, useEffect } from 'react'
import pic from './src/assets/Photos/heart_emoji_draw.png'

export default function Confirmation() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [currentDate, setCurrentDate] = useState('')

    const handleConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 10000);
    }

    useEffect(() => {
        const now = new Date();
        const formattedDateTime = now.toLocaleString();
        setCurrentDate(formattedDateTime);
    }, [])
    
    return (
        <div className={styles.wrapper}>
            <Confetti
            numberOfPieces={150}
            wind={0.02}
            gravity={0.1}
            />
            <div className={styles.image}>  
                <img src={pic} alt="heart emoji" />
            </div>
            <h1>God is our center.🙌</h1>
            <Verse
            text="Uno solo puede ser vencido,
                pero dos pueden resistir.
                ¡La cuerda de tres hilos no se rompe fácilmente!"
            path="Eclesiastés 4:12 NVI"

            />
            <h2>💓We are now officially an couple! 🧑🏽‍❤️‍👩🏾</h2>

            <p className={styles.date}><span>
              🗓️ Our special date:  
                </span>
                 {currentDate} </p>
            
        </div>
    )
}