import { faAddressCard, faBars, faEnvelope, faListUl, faTools, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  AppBar,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import { ProfileNetwork } from '../components/ProfileNetwork'
import { ProfilePicture } from '../components/ProfilePicture'
import '../styles/globals.css'
import { theme } from '../styles/theme'
import styles from './_app.module.css'

const menuLinks = [
  {
    icon: faAddressCard,
    text: 'About',
    href: '/',
  },
  {
    icon: faListUl,
    text: 'Skills',
    href: '/skills',
  },
  {
    icon: faTrophy,
    text: 'Achievements',
    href: '/achievements',
  },
  {
    icon: faTools,
    text: 'Tools',
    href: '/tools',
  },
  {
    icon: faEnvelope,
    text: 'Contact',
    href: '/contact',
  },
]

const drawer = (
  <div className={styles.menu}>
    <div className={styles.profile}>
      <ProfilePicture />

      <div>
        <h2>Bruno L Michels</h2>
        <i>Developer</i>
      </div>

      <ProfileNetwork />
    </div>

    <Divider />

    {menuLinks.map(({ href, text, icon }, index) => (
      <Button key={href}>
        <Link href={href}>
          <a>
            <FontAwesomeIcon icon={icon} width="12" />
            <span>{text}</span>
          </a>
        </Link>
      </Button>
    ))}
  </div>
)

function App({ Component, pageProps }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
            <FontAwesomeIcon icon={faBars} width={16} />
          </IconButton>
          <Typography variant="h6" noWrap>
            BrunoLM
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="xxx">
        <div className="side">
          <aside className={styles.sideBar}>
            <nav className={styles.drawer}>
              <div className={styles.drawerMain}>
                <Drawer
                  variant="permanent"
                  anchor={'left'}
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                    paper: styles.drawerPaper,
                  }}
                >
                  {drawer}
                </Drawer>
              </div>
              <div>
                <Drawer
                  variant="temporary"
                  anchor={'left'}
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                    paper: styles.drawerPaper,
                  }}
                  ModalProps={{
                    keepMounted: true,
                  }}
                >
                  {drawer}
                </Drawer>
              </div>
            </nav>
          </aside>
        </div>

        <section id="content" className={styles.content}>
          <main>
            <Component {...pageProps} />
          </main>
        </section>
      </div>
    </ThemeProvider>
  )
}

export default App
