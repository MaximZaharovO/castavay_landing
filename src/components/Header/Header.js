import Logo from "components/Logo";
import HeaderLink from "./HeaderLink";
import { useState } from "react";
import routeList from "shared/routes";

export default function Header() {
  const [hamActive, setHamActive] = useState(false)

  const activeClass = hamActive ? ' active' : ''

  return (
    <header className='APP-header_wrapper'>
      <Logo/>
      <div onClick={() => setHamActive(prev => !prev)} class={"burger" + activeClass} />
      <nav className={"APP-header_nav_bar" + activeClass}>
        <HeaderLink to={routeList.HOME} isActive={true}>Home</HeaderLink>
        <HeaderLink to={routeList.EPISODES}>Episodes</HeaderLink>
        <HeaderLink to={routeList.ABOUT}>About</HeaderLink>
        <HeaderLink to={routeList.CONTACT}>Contact</HeaderLink>
      </nav>
    </header>
  );
}


