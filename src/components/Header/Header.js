import Logo from "components/Logo";
import BurgerNav from "./BurgerNav";

export default function Header() {
  return (
    <header className='APP-header_wrapper'>
      <Logo/>
      <BurgerNav />
    </header>
  );
}


