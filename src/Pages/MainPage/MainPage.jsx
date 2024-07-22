import styles from "/src/Pages/MainPage/MainPage.module.css"
import Titles from "../../Components/Titles/Titles"
import Verse from "../../Components/Verse/Verse"
import Question from "../../Components/Question/Question"
import PrevArrow from "../../Components/Arrows/Prev/PrevArrow";
// Framer
//carousel 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../../Components/Arrows/Next/NextArrow";


export default function MainPage() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: false,
        mobileFirst: true,
        swipe: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>  
                <img src="src\assets\Photos\heart_emoji_draw.png" alt="heart emoji" />
            </div>
            <div className={styles.sectionOne}>
                <Slider {...settings}>
                    <Titles
                    text="Today is the Day 👀
                    "
                    />
                    <Titles
                    text="We are on phase 1️⃣"
                    />
                    <Titles
                    text="Now we are both ready for the next step... ➡️"
                    />
                    <Verse
                    text='
                        "Mejor son dos que uno, porque obtienen más fruto de su esfuerzo"
                    '
                    path="Eclesiastés 4:9 NVI"
                    />
               
                    <Question />
                    
                </Slider>
            </div>

        </div>
    )
}