import Nullstack, { NullstackClientContext } from 'nullstack'
import { pageMeta } from '../core/page-meta'
import './index.css'

interface Props {
  route: string
}

export class Personality extends Nullstack<Props> {
  prepare({ project, page }: NullstackClientContext<Props>) {
    page.title = `BrunoLM Personality - Powered by Nullstack!`
    page.description = pageMeta.description
  }

  render({ project }: NullstackClientContext<Props>) {
    return (
      <section class="Personality">
        <article class="flex flex-wrap">
          <div class="bg-gray-700 p-8 rounded-3xl w-1/2">
            <h2 class="text-3xl font-bold">MBTI: INTJ</h2>
            <p class="mt-4 text-xl">
              As an INTJ Bruno Leonardo Michels tends to be confident, analytical, and ambitious. Bruno is likely an
              independent thinker focused on solving the world's problems.
            </p>
            <p class="text-right">
              -{' '}
              <a
                href="https://www.crystalknows.com/p/brunolm"
                target="_blank"
                rel="noopener noreferrer"
                class="text-underline"
              >
                Crystal Knowns
              </a>
            </p>
          </div>

          <div class="bg-gray-700 p-8 rounded-3xl w-1/2">
            <h2 class="text-3xl font-bold">DISC: Skeptic (Cd)</h2>
            <p class="mt-4 text-xl">
              Bruno Leonardo Michels tends to be an objective thinker who prioritizes accuracy and results. He will
              likely pay attention to small details and take a systematic approach to solving problems.
            </p>
            <p class="text-right">
              -{' '}
              <a
                href="https://www.crystalknows.com/p/brunolm"
                target="_blank"
                rel="noopener noreferrer"
                class="text-underline"
              >
                Crystal Knowns
              </a>
            </p>
          </div>

          <div class="bg-gray-700 p-8 rounded-3xl w-1/2">
            <h2 class="text-3xl font-bold">Enneagram: 5 - The Thinker</h2>
            <p class="mt-4 text-xl">
              As a Type Five, Bruno Leonardo Michels tends to be curious, independent, and observant. Bruno generally
              loves to pursue knowledge and seeks a deeper understanding of the world.
            </p>
            <p class="text-right">
              -{' '}
              <a
                href="https://www.crystalknows.com/p/brunolm"
                target="_blank"
                rel="noopener noreferrer"
                class="text-underline"
              >
                Crystal Knowns
              </a>
            </p>
          </div>
        </article>
      </section>
    )
  }
}
