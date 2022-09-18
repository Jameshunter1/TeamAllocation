import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <ul className="navbar-nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/GroupedTeamMembers">Teams</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav