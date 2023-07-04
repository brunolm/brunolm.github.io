import Nullstack, { NullstackClientContext } from 'nullstack'
import { H2 } from '../core/H2'
import { pageMeta } from '../core/page-meta'
import './index.css'

interface Props {
  route: string
}

export class Personality extends Nullstack<Props> {
  prepare({ project, page }: NullstackClientContext<Props>) {
    page.title = `Personality ${pageMeta.titleSuffix}`
    page.description = `Information about Bruno Leonardo Michels (BrunoLM) personality. MBTI, DISC, Enneagram, and more.`
  }

  render({ project }: NullstackClientContext<Props>) {
    return (
      <section class="Personality">
        <H2>Bruno's personality</H2>
        <article class="grid grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 gap-4">
          <div class="bg-gray-700 p-8 rounded-3xl">
            <h2 class="text-3xl font-bold">MBTI: INTJ</h2>
            <p class="mt-4 text-xl">
              As an INTJ Bruno Leonardo Michels tends to be confident, analytical, and ambitious. Bruno is likely an
              independent thinker focused on solving the world's problems.
            </p>
            <p class="text-right mt-4">
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

          <div class="bg-gray-700 p-8 rounded-3xl">
            <h2 class="text-3xl font-bold">DISC: Skeptic (Cd)</h2>
            <p class="mt-4 text-xl">
              Bruno Leonardo Michels tends to be an objective thinker who prioritizes accuracy and results. He will
              likely pay attention to small details and take a systematic approach to solving problems.
            </p>
            <p class="text-right mt-4">
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

          <div class="bg-gray-700 p-8 rounded-3xl">
            <h2 class="text-3xl font-bold">Enneagram: 5 - The Thinker</h2>
            <p class="mt-4 text-xl">
              As a Type Five, Bruno Leonardo Michels tends to be curious, independent, and observant. Bruno generally
              loves to pursue knowledge and seeks a deeper understanding of the world.
            </p>
            <p class="text-right mt-4">
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
        <article class="mt-8">
          <h3 class="font-bold text-xl mb-2">During A Call Or A Meeting (Humantic AI)</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-green-900">
              <b>DO's</b>
              <ul class="list-disc list-inside">
                <li>
                  Be to-the-point and very objective when you share details with them, they are not sold by stories like
                  the S or I personality types.
                </li>
                <li>Share factual information about the role and also highlight what impact it could create.</li>
              </ul>
            </div>
            <div class="p-4 rounded-xl bg-red-900">
              <b>DONT's</b>
              <ul class="list-disc list-inside">
                <li>
                  Do not make the role look easy or too repeatable. Unlike the S personality types, this repels them
                  away.
                </li>
                <li>Skip verbosity and small talk, they are highly likely to be put off by it.</li>
                <li>
                  Don't focus on talking about "friendly workplace", "work life balance" etc., it is quite far from what
                  they truly care about.
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article class="mt-16">
          <p class="text-xl p-2 text-center bg-yellow-800">
            💡 Although that's my default personality, it doesn't mean that I'm immutable. I am always ready to learn
            and grow in new situations.
          </p>
          <figure class="max-w-screen-md mx-auto text-center mt-12">
            <svg
              aria-hidden="true"
              class="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
                Empty your mind, be formless, shapeless, like water. Now you put water into a cup, it becomes the cup.
                You put water into a bottle and it becomes the bottle. You put it in a teapot it becomes the teapot. Now
                water can flow or it can crash. Be water, my friend.
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite class="pr-3 font-medium text-gray-900 dark:text-white">Bruce Lee</cite>
                <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">Legend</cite>
              </div>
            </figcaption>
          </figure>
        </article>
      </section>
    )
  }
}
