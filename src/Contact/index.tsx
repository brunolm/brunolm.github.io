import Nullstack, { NullstackClientContext } from 'nullstack'
import { Icon } from '../Shared/Icon'
import { pageMeta } from '../core/page-meta'
import './index.css'

interface Props {
  route: string
}

export class Contact extends Nullstack<Props> {
  prepare({ project, page }: NullstackClientContext<Props>) {
    page.title = `BrunoLM Contact - Powered by Nullstack!`
    page.description = pageMeta.description
  }

  render({ project }: NullstackClientContext<Props>) {
    return (
      <>
        <section class="w-full py-6">
          <h2 class="text-center text-2xl">Bruno Leonardo Michels contact info</h2>
          <div class="flex justify-center">
            <article class="flex items-center">
              <ul>
                <li class="flex gap-2 items-center">
                  <Icon prefix="fas" name="mail-bulk" size={24} /> <span>brunolm7@gmail.com</span>
                </li>

                <li class="flex gap-2 items-center">
                  <Icon prefix="fa-brands" name="twitter" size={24} /> <span>Twitter</span>
                </li>

                <li class="flex gap-2 items-center">
                  <Icon prefix="fa-brands" name="linkedin" size={24} /> <span>LinkedIn</span>
                </li>
              </ul>
            </article>
            <aside class="mt-8">
              <img src="/nulla-chan.webp" alt="Nulla-Chan: Nullstack's official waifu" class="w-48" />
            </aside>
          </div>
        </section>
      </>
    )
  }
}
