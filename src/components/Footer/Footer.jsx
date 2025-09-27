import Logo from "components/Logo";
import { Listens } from "components/Socials/Listens";
import { Socials } from "components/Socials/Socials";
import './footer.css'
import { Link } from "react-router";
import routeList from "shared/routes";

export default function Footer() {
    return (
        <footer className="FOOTER-wrapper">
            <div className="FOOTER-logo_block">
                <Logo />
                <div className="FOOTER-logo_block__socials">
                    <Socials />
                </div>
            </div>

            <div className="FOOTER-nav_wrapper">
                <div className="FOOTER-nav">
                <nav className="FOOTER-nav_main__bar">
                    <div><Link to={routeList.HOME}>Home</Link></div>
                    <div><Link to={routeList.ABOUT}>About</Link></div>
                    <div><Link to={routeList.EPISODES}>Episodes</Link></div>
                    <div><Link to={routeList.CONTACT}>Contact</Link></div>
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
            </div>

            <div className="Footer-socials">
                <Listens />
            </div>
        </footer>
    )
}