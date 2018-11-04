import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.textbox}>
        <h1>Larissa Developers is a group of awesome people</h1>
        <h2>who like to do awesome things</h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
