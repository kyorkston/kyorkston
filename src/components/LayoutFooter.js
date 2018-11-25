import React from 'react'
import { connect } from 'react-fela'

const LayoutFooter = ({ styles }) => (
  <footer className={styles.container}>
    -
    <ul className={styles.linkList} id="footer-links">
      <a className={styles.linkItem} href="https://twitter.com/kristiejaywhy">
        Twitter
      </a>
      <a className={styles.linkItem} href="https://github.com/kyorkston">
        Github
      </a>
      <a href="https://www.linkedin.com/in/kristie-yorkston-a7a193138/">
        LinkedIn
      </a>
    </ul>
    <small>
      <a
        className={styles.smallLink}
        href="https://github.com/kyorkston/kyorkston"
      >
        Github Repo
      </a>
    </small>
  </footer>
)

const styles = {
  linkList: () => ({
    margin: '0',
    listStyle: 'none',
    color: 'black'
  }),
  linkItem: () => ({
    paddingRight: '10px',
  }),
  smallLink: () => ({
    textTransform: 'uppercase',
  }),
}

export default connect(styles)(LayoutFooter)
