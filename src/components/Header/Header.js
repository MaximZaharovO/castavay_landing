import HeaderLink from "./HeaderLink";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  return (
    <header className='APP-header_wrapper'>
      <HeaderLogo/>
      <nav className="APP_header_nav_bar">
        <HeaderLink isActive={true}>Home</HeaderLink>
        <HeaderLink>Episodes</HeaderLink>
        <HeaderLink>About</HeaderLink>
        <HeaderLink>Contact</HeaderLink>
      </nav>
    </header>
  );
}


