import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.outer}>
    <div className={styles.inner}>
      <h1 className={styles.pageTitle}>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
