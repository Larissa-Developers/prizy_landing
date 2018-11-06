import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
import styles from './index.module.css'
import Image from '../images/team-illustration.svg'

const IndexPage = () => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textbox}>
          <h1>Larissa Developers is a group of awesome people</h1>
          <h2>who like to do awesome things</h2>
        </div>
        <img className={styles.team_illustration} src={Image} alt="A team of people and a dog"/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
