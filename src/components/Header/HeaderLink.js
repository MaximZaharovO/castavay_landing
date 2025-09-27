import { NavLink } from "react-router";

export default function HeaderLink({ onClick, children, to }) {
  return (
    <NavLink 
      className={`APP-header_nav`} 
      to={to}
      onClick={onClick}
      >
      {children}
    </NavLink>
  );
}
