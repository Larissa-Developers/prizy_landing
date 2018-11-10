import React from 'react'
import { Link } from 'gatsby'
import '../assets/styles/_global.scss'
import styles from './header.module.scss'
import logo from '../images/larissa-developers-logo.svg'

const Header = ({ siteTitle, menuLinks }) => (
  <div className={styles.outer}>
    <div className={styles.wrapper}>
      <Link to={'/'}>
        <img className={styles.logo} src={logo} alt="Larissa Developers Logo" />
      </Link>
      <nav className={styles.navbar}>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </nav>
    </div>
  </div>
)

export default Header
