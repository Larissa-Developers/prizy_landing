import React from 'react'
import { Link } from 'gatsby'
import '../assets/styles/_global.scss'
import styles from './footer.module.scss'
import Image1 from '../images/meetup-icon.svg'
import Image2 from '../images/slack-icon.svg'
import Image3 from '../images/facebook-icon.svg'
import Image4 from '../images/github-icon.svg'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.wrap}>
      <Link to={'/'}>
        <img className={styles.icon} src={Image1} alt="Meetup Icon" />
      </Link>
      <Link to={'/'}>
        <img className={styles.icon} src={Image2} alt="Slack Icon" />
      </Link>
      <Link to={'/'}>
        <img className={styles.icon} src={Image3} alt="Facebook Icon" />
      </Link>
      <Link to={'/'}>
        <img className={styles.icon} src={Image4} alt="Github Icon" />
      </Link>
      <div className={styles.footer_text}>
        Designed and coded in Larissa with &#60;3
      </div>
    </div>
  </div>
)

export default Footer
