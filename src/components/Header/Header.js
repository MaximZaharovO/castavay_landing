import Logo from "components/Logo";
import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header className='APP-header_wrapper'>
      <Logo/>
      <nav className="APP_header_nav_bar">
        <HeaderLink isActive={true}>Home</HeaderLink>
        <HeaderLink>Episodes</HeaderLink>
        <HeaderLink>About</HeaderLink>
        <HeaderLink>Contact</HeaderLink>
      </nav>
    </header>
  );
}


