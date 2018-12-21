import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styles from './index.module.scss'
import teamImage from '../images/team-illustration.svg'
import sliderButtonImage from '../images/slider-button.svg'
import iphoneImage from '../images/iphone-face-image.png'
import googleplayImage from '../images/googleplay-icon.svg'
import appstoreImage from '../images/appstore-icon.svg'
import githubImage from '../images/github-button.svg'
import connectImage from '../images/connect-illustration.svg'

const IndexPage = () => (
  <Layout>
    <section className={styles.sectionRoundBottom}>
      <div className={styles.wrapperFlex}>
        <div className={styles.col1of2}>
          <div className={styles.textbox}>
            <h1>Larissa Developers is a group of awesome people</h1>
            <h3>who like doing awesome things</h3>
          </div>
        </div>
        <div className={styles.col1of2}>
          <img
            className={styles.illustration}
            src={teamImage}
            alt="A team of people and a dog"
          />
        </div>
      </div>
    </section>
    <Link to={'#prizy'} className={styles.slider_btn}>
      <img src={sliderButtonImage} alt="Slider Button" />
    </Link>
    <section className={styles.sectionSimple}>
      <div className={styles.row} id="prizy">
        <h2>Explore Prizy!</h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.col1of3}>
          <img
            className={styles.iphone}
            src={iphoneImage}
            alt="IPhone screen"
          />
        </div>
        <div className={styles.col2of3}>
          <div className={styles.prizy_logo}>Prizy logo here</div>
          <h4>Built by the community for the community!</h4>
          <Link to={'/'}>
            <img
              className={styles.download_btn}
              src={googleplayImage}
              alt="Google play Download"
            />
          </Link>
          <Link to={'/'}>
            <img
              className={styles.download_btn}
              src={appstoreImage}
              alt="App Store Download"
            />
          </Link>
        </div>
      </div>
    </section>
    <section className={styles.sectionRoundTop}>
      <div className={styles.row}>
        <h2>Connect with us!</h2>
      </div>
      <div className={styles.wrapperFlex34}>
        <div className={styles.col1of2}>
          <div className={styles.textbox2}>
            <h2>Be a part of our community</h2>
            <h3>and help us grow Prizy!</h3>
            <Link to={'https://github.com/Larissa-Developers'}>
              <img
                className={styles.download_btn}
                src={githubImage}
                alt="GitHub Button"
              />
            </Link>
          </div>
        </div>
        <div className={styles.col1of2}>
          <img
            className={styles.illustrationConnect}
            src={connectImage}
            alt="Connect Illustration"
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
