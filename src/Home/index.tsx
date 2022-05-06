import Nullstack, { NullstackClientContext } from 'nullstack'
import { FavoriteTech } from './FavoriteTech'
import './index.css'
import { Picture } from './Picture'
import { WhatIDo } from './WhatIDo'

interface Props extends NullstackClientContext {
  route: string
}

export class Home extends Nullstack<Props> {
  prepare({ page }: Props) {
    page.title = `BrunoLM - Powered by Nullstack!`
    page.description = `Bruno Leonardo Michels is a world class developer with over 15 years of experience doing stuff. Bruno's online handle is BrunoLM, the dev for fun!`
  }

  renderLink({ children, href }: { children: Element[]; href: string }) {
    const link = href + '?ref=create-nullstack-app'
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  render({ project }: Props) {
    const expYears = new Date().getFullYear() - 2007

    return (
      <section class="Home">
        <article>
          <h1 class="text-4xl mb-2">BrunoLM the developer for fun!</h1>
          <div>
            <div class="flex gap-1 mb-4">
              <a href="https://stackoverflow.com/users/340760/brunolm" target="_blank">
                <img
                  alt="brunolm on stack overflow"
                  src="https://img.shields.io/stackexchange/stackoverflow/r/340760?style=for-the-badge&amp;color=orange&amp;label=Stack+Overflow&amp;logo=stackoverflow&amp;logoColor=fff&amp;cacheSeconds=952000"
                />
              </a>
              <img alt="codewars" src="https://www.codewars.com/users/brunolm/badges/micro" height="28px" />
            </div>

            <p>
              <strong>Bruno Leonardo Michels</strong> is a world class developer with over {expYears} years of
              experience having fun doing stuff.
            </p>
          </div>

          <FavoriteTech />

          <WhatIDo />

          <Picture />
        </article>
      </section>
    )
  }
}
