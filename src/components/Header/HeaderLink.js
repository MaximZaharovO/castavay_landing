import { NavLink } from "react-router";

export default function HeaderLink({ children, to }) {
  return (
    <NavLink 
      className={`APP-header_nav`} 
      to={to}
      >
      {children}
    </NavLink>
  );
}
