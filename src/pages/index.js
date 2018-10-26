import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Καλώς ήλθατε στο Prizy!!!</h1>
    <p>
      Ελάτε παρέα να δημιουργήσουμε ένα ωραίο website για να στεγάσει το Landing
      Page του Prizy ως μέρος του Hacktoberfest.
    </p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <img src="https://hacktoberfest.digitalocean.com/assets/hacktoberfest-2018-social-card-c8d2e1489f647f2e0a26e6f598adeb760872818905b34cd437afc7ac2857ceab.png" />
    </div>
    <p>
      Projects για το Prizy:
      <ul>
        <li>
          <a
            href="https://github.com/Larissa-Developers/prizy_backend"
            target="_blank"
          >
            Prizy back-end
          </a>{' '}
          |{' '}
          <a href="https://trello.com/b/zIPr3q6l/prizy-backend" target="_blank">
            Trello Board
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Larissa-Developers/prizy_mobile"
            target="_blank"
          >
            Prizy mobile apps
          </a>{' '}
          |{' '}
          <a href="https://trello.com/b/oCVfuIUL/prize-app" target="_blank">
            Trello Board
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Larissa-Developers/prizy_landing"
            target="_blank"
          >
            Prizy landing page
          </a>{' '}
          (what you see here) |{' '}
          <a href="https://trello.com/b/rJL4xrcH/prizy-web" target="_blank">
            Trello Board
          </a>
        </li>
      </ul>
      <blockquote>
        Στα Trello boards μπορείτε επιλέξετε τι θα θέλατε να κάνετε από τα
        αντίστοιχα tasks.
      </blockquote>
    </p>
    <p>
      Για την επικοινωνία και τον συντονισμό της όμαδας χρησιμοποιούμε το{' '}
      <strong>#prizy</strong> channel στο Slack. Αν δεν είσαι ακόμη στο Slack
      κάνε join{' '}
      <a
        href="https://larissadevelopers.slack.com/join/shared_invite/enQtMzc1NjYzODc1MjY1LWI3MTM4YjAwZTBkMzAxYjJmYzY0ZTY1MTE3NmFjY2IzMTVjZDllNDczNjk5ZmE0MTY1Yjk1Zjc0NzJkMGY4YzE"
        target="_blank"
      >
        εδώ
      </a>
      .
    </p>
    <p>
      Για όσους βλέπετε το GitHub για πρώτη φόρα και δεν ξέρετε τι είναι το Pull
      Request (PR) ώστε να συνεισφέρετε στο Project, μπορείτε να διαβάσετε
      περισσότερα{' '}
      <a
        href="https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source"
        target="_blank"
      >
        εδώ
      </a>
      .
    </p>

    <hr />
    <Link to="/page-2/">Go to page 2 (example page)</Link>
  </Layout>
)

export default IndexPage
