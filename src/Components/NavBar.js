import { NavLink } from 'react-router-dom';
import planet from '../Assets/planet.png';

const Navbar = () => (
  <header className="header">
    <nav>
      <div className="logo-div">
        <img className="logo" src={planet} alt="logo" />
        <h2 className="logo-heading">
          <span className="logo-text-1">Space</span>
          <span className="logo-text-2">Travellers</span>
          <span className="logo-text-3">Hub</span>
        </h2>
      </div>
      <div className="nav-links">
        <NavLink className="home-link" to="/">Rockets</NavLink>
        <NavLink className="missons-link" to="/missons">Missons</NavLink>
        <NavLink className="profile-link" to="/profile">My Profile</NavLink>
      </div>
    </nav>
  </header>
);

export default Navbar;
