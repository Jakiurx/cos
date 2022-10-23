import Header from './components/Header';
import Footer from './components/Footer';
import "./style/Main.css";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <>
            <Header />
            <main>
                <div data-aos="fade-left" data-aos-duration="3000"className='gradientText'>Witaj!!!</div>
                <div className='rightMain'>Jestem <span className='bigTextMain'>Mariusz</span> i zajmuję się programowaniem aplikacji oraz stron internetowych</div>
            </main>
            <Footer />
        </>
    )
}