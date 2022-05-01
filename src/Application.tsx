import Nullstack, { NullstackClientContext } from 'nullstack'
import { Achievements } from './Achievements'
import './Application.css'
import { Contact } from './Contact'
import { Home } from './Home'
import { Skills } from './Skills'
import './tailwind.css'
import { Tools } from './Tools'

declare function Head(): typeof Application.prototype.renderHead
declare function Nav(): typeof Application.prototype.renderNav

class Application extends Nullstack {
  prepare({ page }: NullstackClientContext) {
    page.locale = 'en-US'
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap" rel="stylesheet" />
      </head>
    )
  }

  renderNav() {
    return (
      <nav class="top-0">
        <div>
          <span>
            <a href="/">
              <img
                src="https://stackoverflow.com/users/flair/340760.png?theme=dark"
                width="208"
                height="58"
                alt="profile for BrunoLM at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                title="profile for BrunoLM at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
              />
            </a>
          </span>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/skills">Skills</a>
            </li>
            <li>
              <a href="/achievements">Achievements</a>
            </li>
            <li>
              <a href="/tools">Tools</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

  render() {
    return (
      <>
        <Head />

        <Nav />

        <main>
          <Home route="/" />
          <Skills route="/skills" />
          <Achievements route="/achievements" />
          <Tools route="/tools/:slug" />
          <Contact route="/contact" />
        </main>
      </>
    )
  }
}

export default Application
