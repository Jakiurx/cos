import Header from './components/Header';
import Footer from './components/Footer';
import "../pages/style/Contact.css"
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <>
            <Header />
            <main>
                <form>
                    <p>Kontakt</p>
                    <span data-aos="fade-left" data-aos-duration="1000"><input className="inputImie" type="text" placeholder="Imię i nazwisko"/></span>
                    <span data-aos="fade-right" data-aos-duration="1200"><input className="inputEmail" type="text" placeholder="Adres e-mail"/></span>
                    <span data-aos="fade-left" data-aos-duration="1300"><textarea className="inputTresc" cols='30' rows='10' placeholder='Treść wiadomości'></textarea></span>
                    <span data-aos="fade-right" data-aos-duration="1400"><input className="submit" type="submit" /></span>
                    
                </form>
            </main>
            <Footer />
        </>
    )
}