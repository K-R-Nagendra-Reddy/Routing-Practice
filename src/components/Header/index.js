// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div className="nav-container">
      <div className="logo-logo-name">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo"
        />
        <p className="logo-text">wave</p>
      </div>
      <ul className="nav-menu-container">
        <li className="link-item">
          <Link to="/">Home</Link>
        </li>
        <li className="link-item">
          <Link to="/about">About</Link>
        </li>
        <li className="link-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
