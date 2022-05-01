import Nullstack, { NullstackClientContext } from 'nullstack'
import { Icon } from '../Shared/Icon'
import './index.css'

interface Props extends NullstackClientContext {
  route: string
}

export class Contact extends Nullstack<Props> {
  prepare({ project, page }: Props) {
    page.title = `BrunoLM Contact - Powered by Nullstack!`
    page.description = `Bruno Leonardo Michels is a world class developer with over 15 years of experience doing stuff.`
  }

  render({ project }: Props) {
    return (
      <section class="flex justify-center">
        <article class="flex items-center">
          <ul>
            <li class="flex gap-2 items-center">
              <Icon prefix="fas" name="mail-bulk" size={24} /> <span>brunolm7@gmail.com</span>
            </li>

            <li class="flex gap-2 items-center">
              <Icon prefix="fa-brands" name="linkedin" size={24} /> <span>LinkedIn</span>
            </li>

            <li class="flex gap-2 items-center">
              <Icon prefix="fa-brands" name="twitter" size={24} /> <span>Twitter</span>
            </li>
          </ul>
        </article>
        <aside class="mt-8">
          <img src="/nulla-chan.webp" alt="Nulla-Chan: Nullstack's official waifu" class="w-48" />
        </aside>
      </section>
    )
  }
}
