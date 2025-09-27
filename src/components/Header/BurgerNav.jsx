import HeaderLink from "./HeaderLink";
import routeList from "shared/data/routes";
import { useRef, useState } from "react";
import useOnClickOutside from "hooks/useOnClickOutside";

export default function BurgerNav() {
    const [hamActive, setHamActive] = useState(false)
    const navRef = useRef(null)

    const activeClass = hamActive ? ' active' : ''

    useOnClickOutside(navRef, () => setHamActive(false))

    return (<div ref={navRef}>
        <div onClick={() => setHamActive(prev => !prev)} class={"burger" + activeClass} />
        <nav className={"APP-header_nav_bar" + activeClass}>
            <HeaderLink to={routeList.HOME} isActive={true}>Home</HeaderLink>
            <HeaderLink to={routeList.EPISODES}>Episodes</HeaderLink>
            <HeaderLink to={routeList.ABOUT}>About</HeaderLink>
            <HeaderLink to={routeList.CONTACT}>Contact</HeaderLink>
        </nav>
    </div>)
}