import './index.scss'
import logo from '../../assets/images/LOGO_small.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => (
  <div className="nav-bar">
    {' '}
    <Link className="logo" to="/">
      <img src={logo} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#cb4063" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#cb4063" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} color="#cb4063" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#cb4063" />
      </NavLink>

      <li>
        <a
          target="_blank"
          rel="noreferrer"
          className="linkendin-link"
          href="https://www.linkedin.com/in/eerkekoglou/"
        >
          <i class="fa fa-linkedin"></i>
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
    </nav>
  </div>
)

export default Sidebar
