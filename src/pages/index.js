import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styles from './index.module.scss'
import Image1 from '../images/team-illustration.svg'
import Image2 from '../images/slider-button.svg'
import Image3 from '../images/iphone-face-image.png'
import Image4 from '../images/googleplay-icon.svg'
import Image5 from '../images/appstore-icon.svg'
import Image6 from '../images/github-button.svg'
import Image7 from '../images/connect-illustration.svg'

const IndexPage = () => (
  <Layout>
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.col1of2}>
          <div className={styles.textbox}>
            <h1>Larissa Developers is a group of awesome people</h1>
            <h2>who like doing awesome things</h2>
          </div>
        </div>
        <div className={styles.col1of2}>
          <img
            className={styles.illustration}
            src={Image1}
            alt="A team of people and a dog"
          />
        </div>
      </div>
    </div>
    <div className={styles.section__no_bg}>
      <div className={styles.row}>
        <Link to={'/'}>
          <img className={styles.slider_btn} src={Image2} alt="Slider Button" />
        </Link>
        <h2>Explore Prizy!</h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.col1of3}>
          <img className={styles.iphone} src={Image3} alt="IPhone screen" />
        </div>
        <div className={styles.col2of3}>
          <div className={styles.prizy_logo}>Prizy logo here</div>
          <h3>Built by the community for the community!</h3>
          <Link to={'/'}>
            <img
              className={styles.download_btn}
              src={Image4}
<<<<<<< HEAD
              alt="Google play Download"
=======
              alt="Download on Google play Button"
>>>>>>> feature/footer
            />
          </Link>
          <Link to={'/'}>
            <img
              className={styles.download_btn}
              src={Image5}
<<<<<<< HEAD
              alt="App Store Download"
=======
              alt="Download on App Store Button"
>>>>>>> feature/footer
            />
          </Link>
        </div>
      </div>
    </div>
    <div className={styles.section__reflect_bg}>
      <div className={styles.row}>
        <h2>Connect with us!</h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.col1of2}>
          <div className={styles.textbox}>
            <h2>Be a part of our community</h2>
            <h3>and help us grow Prizy!</h3>
            <Link to={'/'}>
              <img
                className={styles.download_btn}
                src={Image6}
                alt="GitHub Button"
              />
            </Link>
          </div>
        </div>
<<<<<<< HEAD
        <div className={styles.col1of2}>
=======
        <div className={styles.wrapper__col1of2}>
>>>>>>> feature/footer
          <img
            className={styles.illustration}
            src={Image7}
            alt="Connect Illustration"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
