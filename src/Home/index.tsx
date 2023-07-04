import Nullstack, { NullstackClientContext } from 'nullstack'
import { pageMeta } from '../core/page-meta'
import { FavoriteTech } from './FavoriteTech'
import { Hero } from './Hero'
import { WhatIDo } from './WhatIDo'
import { WhoAmI } from './WhoAmI'

interface Props {
  route: string
}

export class Home extends Nullstack<Props> {
  prepare({ page }: NullstackClientContext<Props>) {
    page.title = `About ${pageMeta.titleSuffix}`
    page.description = `Bruno Leonardo Michels is a developer with over ${
      new Date().getFullYear() - 2007
    } years of experience. Bruno's online handle is BrunoLM, the dev for fun! Self-taught, autonomous!`
  }

  render({ project }: NullstackClientContext<Props>) {
    return (
      <section class="Home">
        <article>
          <Hero />
          <FavoriteTech />
          <WhatIDo />
          <WhoAmI />
        </article>
      </section>
    )
  }
}
