import Nullstack, { NullstackClientContext } from 'nullstack'
import { pageMeta } from '../core/page-meta'
import './index.css'
import { skills } from './skills'

interface Props extends NullstackClientContext {
  route: string
}

export class Skills extends Nullstack<Props> {
  prepare({ page }: Props) {
    page.title = `BrunoLM Skills - Powered by Nullstack!`
    page.description = pageMeta.description
  }

  render({ project }: Props) {
    return (
      <section class="Skills">
        <article>
          <h1 class="text-4xl mb-2">Bruno Leonardo Michels' skills are</h1>

          <div>
            <ul class="flex flex-wrap">
              {skills.map((skill) => (
                <li
                  class={`${skill.badge} w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2`}
                  title={skill.badge !== 'none' ? `${skill.badge} badge on Stack Overflow` : null}
                >
                  <div>{skill.name}</div>
                  <div class="text-xs">{skill.years} years of exp</div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    )
  }
}
