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
      <Link to={'https://www.meetup.com/Larissa-Developers-Meetup/'}>
        <img className={styles.icon} src={Image1} alt="Meetup Icon" />
      </Link>
      <Link
        to={
          'https://larissadevelopers.slack.com/join/shared_invite/enQtMzc1NjYzODc1MjY1LWI3MTM4YjAwZTBkMzAxYjJmYzY0ZTY1MTE3NmFjY2IzMTVjZDllNDczNjk5ZmE0MTY1Yjk1Zjc0NzJkMGY4YzE'
        }
      >
        <img className={styles.icon} src={Image2} alt="Slack Icon" />
      </Link>
      <Link to={'https://www.facebook.com/larissadevelopers/'}>
        <img className={styles.icon} src={Image3} alt="Facebook Icon" />
      </Link>
      <Link to={'https://github.com/Larissa-Developers'}>
        <img className={styles.icon} src={Image4} alt="Github Icon" />
      </Link>
      <div className={styles.footer_text}>
        Designed and coded in Larissa with &#60;3
      </div>
    </div>
  </div>
)

export default Footer
