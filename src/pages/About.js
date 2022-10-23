import Header from './components/Header';
import Footer from './components/Footer';
import "./style/About.css";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <>
            <Header />
                <div className='about'>
                    <section data-aos="fade-right" data-aos-duration="1000" className='card'>
                        Edukacja
                        <ul>
                            <span>2019-2023</span>
                            <li>Zespół Szkół Ekonomicznych - Technik Informatyk</li>
                        </ul>
                    </section>
                    <section data-aos="fade-left" data-aos-duration="1000" className='card'>
                        Moje umiejętności
                        <ul>
                            <li>Projektowanie stron internetowych</li>
                            <li>Programowanie aplikacji</li>
                            <li>Zarządzanie bazami danych</li>
                            <li>Naprawa sprzętu komputerowego</li>
                        </ul>
                    </section>
                    <section data-aos="fade-right" data-aos-duration="1000" className='card'>
                        To, czego używam w swoich projektach
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </section>
                    <section data-aos="fade-left" data-aos-duration="1000" className='card'>
                        Moje zainteresowania
                        <ul>
                            <li>Formuła 1</li>
                            <li>Koszykówka</li>
                        </ul>
                    </section>
                </div>
            <Footer />
        </>
    )
}