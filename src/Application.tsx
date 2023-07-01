import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'
import '../tailwind.css'
import { AI } from './AI'
import { Achievements } from './Achievements'
import { Contact } from './Contact'
import { Home } from './Home'
import { Personality } from './Personality'
import { Tools } from './Tools'

declare function Redirects(): NullstackNode
declare function Head(): NullstackNode
declare function Nav(): NullstackNode

class Application extends Nullstack {
  expanded = false

  prepare({ page }: NullstackClientContext) {
    page.locale = 'en-US'
  }

  toggle() {
    this.expanded = !this.expanded
  }

  close() {
    this.expanded = false
  }

  renderRedirects({ router }: NullstackClientContext) {
    return (
      <>
        {router.path === '/linkedin' && (
          <meta http-equiv="refresh" content="0; url=https://www.linkedin.com/in/brunolm/" />
        )}
        {router.path === '/blog' && <meta http-equiv="refresh" content="0; url=https://blog.codingwise.com" />}
        {router.path === '/twitter' && <meta http-equiv="refresh" content="0; url=https://twitter.com/BrunoLM7" />}
        {router.path === '/stackoverflow' && (
          <meta http-equiv="refresh" content="0; url=https://stackoverflow.com/users/340760/brunolm" />
        )}
        {router.path === '/so' && (
          <meta http-equiv="refresh" content="0; url=https://stackoverflow.com/users/340760/brunolm" />
        )}
        {router.path === '/youtube' && (
          <meta http-equiv="refresh" content="0; url=https://www.youtube.com/c/BrunoLeonardoMichels" />
        )}
        {router.path === '/instagram' && (
          <meta http-equiv="refresh" content="0; url=https://www.instagram.com/brunolm7" />
        )}
        {router.path === '/facebook' && (
          <meta http-equiv="refresh" content="0; url=https://www.facebook.com/brunolm7" />
        )}
        {router.path === '/skills' && <meta http-equiv="refresh" content="0; url=/" />}
      </>
    )
  }

  renderHead() {
    return (
      <head>
        <Redirects />
        <meta name="theme-color" value="dark" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
    )
  }

  renderNav({ router }) {
    const menuClass =
      'text-2xl font-sora block py-4 md:py-2 pr-4 pl-3 md:p-0 hover:text-white border-b border-gray-700 md:border-0'

    return (
      <>
        <nav class="top-0 fixed md:relative w-full py-2.5 bg-slate-900 rounded">
          <div class="container px-4 mx-auto flex flex-wrap justify-between items-center">
            <a href="/">
              <img alt="bruno the dev for fun" src="/images/logo-b-dev-for-fun.png" />
            </a>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={this.expanded}
              onclick={this.toggle}
            >
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class={`w-full md:block md:w-auto ${this.expanded ? '' : 'hidden'}`} id="mobile-menu">
              <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-gray-300">
                <li>
                  <a
                    onclick={this.close}
                    default
                    href="/"
                    class={router.path === '/' ? `text-blue-400 ${menuClass}` : menuClass}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onclick={this.close}
                    default
                    href="/personality"
                    class={router.path === '/personality' ? `text-blue-400 ${menuClass}` : menuClass}
                  >
                    Personality
                  </a>
                </li>
                <li>
                  <a
                    onclick={this.close}
                    default
                    href="/achievements"
                    class={router.path === '/achievements' ? `text-blue-400 ${menuClass}` : menuClass}
                  >
                    Achievements
                  </a>
                </li>
                <li>
                  <a
                    onclick={this.close}
                    default
                    href="/ai"
                    class={router.path === '/ai' ? `text-blue-400 ${menuClass}` : menuClass}
                  >
                    AI
                  </a>
                </li>
                <li>
                  <a
                    onclick={this.close}
                    default
                    href="/random"
                    class={router.path === '/random' ? `text-blue-400 ${menuClass}` : menuClass}
                  >
                    Random
                  </a>
                </li>
                <li>
                  <a
                    onclick={this.close}
                    default
                    href="/contact"
                    class={router.path === '/contact' ? `text-blue-400 ${menuClass}` : menuClass}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container mx-auto pb-8">
          <div class="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
      </>
    )
  }

  render() {
    return (
      <body class="bg-slate-800 text-white font-roboto">
        <Head />

        <Nav />

        <main class="container mx-auto px-4 mt-32 md:mt-0">
          <Home route="/" />
          <Personality route="/personality" />
          <Achievements route="/achievements" />
          <Tools route="/random/:slug" />
          <AI route="/ai" />
          <Contact route="/contact" />
        </main>
      </body>
    )
  }
}

export default Application
