import Nullstack, { NullstackClientContext } from 'nullstack'
import './index.css'
import { Textarea } from './Textarea'

interface Props extends NullstackClientContext {
  route: string
}

export class Tools extends Nullstack<Props> {
  prepare({ page }: Props) {
    page.title = `BrunoLM Tools - Powered by Nullstack!`
    page.description = `Bruno Leonardo Michels is a world class developer with over 15 years of experience doing stuff. BrunoLM has many nice toys.`
  }

  render({ project }: Props) {
    return (
      <section class="Tools">
        <article>
          <h1 class="text-4xl mb-2">BrunoLM Tools!</h1>

          <ul class="mb-8">
            <li class="list-disc ml-8">
              <a href="/tools/textarea">
                Textarea: saves what you type on localStorage and allows the browser to do spellcheck stuff
              </a>
            </li>
          </ul>

          <div>
            <Textarea route="/tools/textarea" />
          </div>
        </article>
      </section>
    )
  }
}
