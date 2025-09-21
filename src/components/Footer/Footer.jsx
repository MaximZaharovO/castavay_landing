import Logo from "components/Logo";
import { Listens } from "components/Socials/Listens";
import { Socials } from "components/Socials/Socials";
import './footer.css'

export default function Footer() {
    return (
        <footer className="FOOTER-wrapper">
            <div className="FOOTER-logo_block">
                <Logo />
                <div className="FOOTER-logo_block__socials">
                    <Socials />
                </div>
            </div>

            <div className="FOOTER-nav">
                <nav className="FOOTER-nav_main__bar">
                    <div><a href="/">Home</a></div>
                    <div><a href="/">About</a></div>
                    <div><a href="/">Episodes</a></div>
                    <div><a href="/">Contact</a></div>
                </nav>
            </div>

            <div className="FOOTER-nav">
                <nav className="FOOTER-nav_main__bar">
                    <div><a href="/">Style Guide</a></div>
                    <div><a href="/">Instructions</a></div>
                    <div><a href="/">Changelog</a></div>
                    <div><a href="/">Credit</a></div>
                    <div><a href="/">Powered by Webflow</a></div>
                    <div><a href="/">Licenses</a></div>
                </nav>
            </div>

            <div className="Footer-socials">
                <Listens />
            </div>
        </footer>
    )
}