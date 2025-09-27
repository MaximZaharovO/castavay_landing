import { Link } from "react-router";
import routeList from "shared/data/routes";

export default function Logo() {
  return (
    <div className='APP-header_logo'>
      <Link to={routeList.HOME}>
        Castaway
      </Link>
    </div>
  )
}
