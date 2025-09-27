import Logo from "components/Logo";
import HeaderLink from "./HeaderLink";
import { useState } from "react";

export default function Header() {
  const [hamActive, setHamActive] = useState(false)

  const activeClass = hamActive ? ' active' : ''

  return (
    <header className='APP-header_wrapper'>
      <Logo/>
      <div onClick={() => setHamActive(prev => !prev)} class={"burger" + activeClass} />
      <nav className={"APP-header_nav_bar" + activeClass}>
        <HeaderLink isActive={true}>Home</HeaderLink>
        <HeaderLink>Episodes</HeaderLink>
        <HeaderLink>About</HeaderLink>
        <HeaderLink>Contact</HeaderLink>
      </nav>
    </header>
  );
}


