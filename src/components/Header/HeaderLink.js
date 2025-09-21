export default function HeaderLink({ children, isActive }) {
  return (
    <a 
      className={`APP-header_nav ${isActive ? 'active' : ''}`} 
      href="/"
      >
      {children}
    </a>
  );
}
