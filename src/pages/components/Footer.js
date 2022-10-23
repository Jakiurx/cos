import "../style/Footer.css";


export default function Footer() {
    const img = require('./waveFooter.png')
    const github = require('./github.png')

    return(
        <>
            <img className="waveFooter" src={img} />
            <footer>
                <a className="githubLink" href="https://www.github.com/Jakiurx">
                <img className="github" src={github} alt="github" />
                Github
                </a>
            </footer>
        </>
    )
}
