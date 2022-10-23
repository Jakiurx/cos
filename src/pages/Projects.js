import Header from './components/Header';
import Footer from './components/Footer';
import "./style/Projects.css";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
    const projekty = [
        {
            img : require('./img/wisielec.png'),
            nazwa : "Wisielec",
            tekst : "HTML PHP JS CSS",
            adres : "https://github.com/Jakiurx/projektySzkolne/tree/main/wisielec"
        },
        { 
            img : require('./img/blackjack.png'),
            nazwa : "Blackjack",
            tekst : "HTML JS CSS",
            adres : "https://github.com/Jakiurx/projektySzkolne/tree/main/Blackjack"
        },
        { 
            img : require('./img/bingo.png'),
            nazwa : "Bingo",
            tekst : "HTML JS CSS",
            adres : "https://github.com/Jakiurx/projektySzkolne/tree/main/Bingo"
        },
        { 
            img : require('./img/Kalendarz.png'),
            nazwa : "Kalendarz",
            tekst : "HTML JS CSS",
            adres : "https://github.com/Jakiurx/projektySzkolne/tree/main/Calendar"
        },
        {
            img : require('./img/logowanie.png'),
            nazwa : "Strona logowania",
            tekst : "HTML JS REACT CSS",
            adres : "https://github.com/Jakiurx/projektySzkolne/tree/main/Logowanie%20React"
        }]
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <>
            <Header />
                <div className='projects'>
                    <span className='spanBigTextProjects'><p className='bigTextProjects'>Oto kilka z moich projektów:</p></span>
                    {projekty.map((e, i) => {
                        return(
                            <a href={e.adres} data-aos={(i%2 === 0) ? "fade-left" : "fade-right"} data-aos-duration="1000" className="projektCard" key={i}>
                            {(i%2 === 0) 
                            ?   <>
                                    <img src={e.img} alt="projekt" />
                                    <div className='napisyProjekt'>
                                        <span className='tytul'>{e.nazwa}</span>
                                        Do wykonania użyłem: {e.tekst}
                                    </div>
                                </>
                            :   <>
                                    <div className='napisyProjekt'>
                                        <span className='tytul'>{e.nazwa}</span>
                                        Do wykonania użyłem: {e.tekst}
                                    </div>
                                    <img src={e.img} alt="projekt" />
                                </>}
                            </a>
                        )
                    })}
                </div>
            <Footer />
        </>
    )
}