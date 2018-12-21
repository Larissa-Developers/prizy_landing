import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styles from './404.module.scss'

const NotFoundPage = () => (
  <Layout>
    <div className={styles.page404}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Hmm... Lost you seem!</h1>
          <h2>Error 404 this is.</h2>
        </div>
        <div className={styles.yoda_clipart} />
        <div className={styles.container_2}>
          <p>
            If no mistake have you made, yet here you are,
            <br />a different page you should visit.
          </p>
          <Link to={'/'}>Let's go back</Link>
          <Link to={'/'}>Take me home</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
