import Nullstack, { NullstackClientContext } from 'nullstack'
import { Icon } from '../Shared/Icon'
import { H2 } from '../core/H2'
import { pageMeta } from '../core/page-meta'
import './index.css'

interface Props {
  route: string
}

export class Contact extends Nullstack<Props> {
  prepare({ project, page }: NullstackClientContext<Props>) {
    page.title = `Contact Information ${pageMeta.titleSuffix}`
    page.description = pageMeta.description
  }

  render({ project }: NullstackClientContext<Props>) {
    return (
      <>
        <section class="py-6 flex flex-col items-center justify-center">
          <H2>Bruno Leonardo Michels contact information</H2>

          <article class="flex flex-col text-4xl mt-12">
            <div class="flex gap-8 mb-4" title="email: brunolm7@gmail.com">
              <Icon prefix="fas" name="mail-bulk" size={24} /> <span>brunolm7@gmail.com</span>
            </div>
            <div class="mb-4">
              <a href="https://brunolm.com/twitter" target="_blank" rel="noopener noreferrer" class="flex gap-8">
                <Icon prefix="fa-brands" name="twitter" size={24} /> <span>Twitter</span>
              </a>
            </div>
            <div class="mb-4">
              <a href="https://brunolm.com/linkedin" target="_blank" rel="noopener noreferrer" class="flex gap-8">
                <Icon prefix="fa-brands" name="linkedin" size={24} /> <span>LinkedIn</span>
              </a>
            </div>
          </article>
        </section>
      </>
    )
  }
}
