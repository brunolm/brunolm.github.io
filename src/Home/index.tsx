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
    page.title = `Bruno Leonardo Michels - BrunoLM - Powered by Nullstack!`
    page.description = pageMeta.description
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
