import './index.scss'
import { useState } from 'react'
import logo from '../../assets/images/LOGO_small.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={logo} alt="logo" />
      </Link>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#cb4063" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#cb4063" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#cb4063" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#cb4063" />
        </NavLink>

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#cb4063"
          size="3x"
          className="close-icon"
        />
      </nav>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            className="linkendin-link"
            href="https://www.linkedin.com/in/eerkekoglou/"
          >
            <i class="fa fa-linkedin" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            className="github-link"
            href=" https://github.com/elic4vet"
            to="github"
          >
            <i class="fa fa-github icon"></i>
          </a>
        </li>
      </ul>

      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#cb4063"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
