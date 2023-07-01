import Nullstack, { NullstackClientContext } from 'nullstack'
import { H2 } from '../core/H2'
import { pageMeta } from '../core/page-meta'
import './index.css'

interface Props {
  route: string
}

const P = (ctx) => {
  return <p class="text-xl mb-4">{ctx.children}</p>
}

export class AI extends Nullstack<Props> {
  prepare({ project, page }: NullstackClientContext<Props>) {
    page.title = `BrunoLM Information - Powered by Nullstack!`
    page.description = pageMeta.description
  }

  render({ project }: NullstackClientContext<Props>) {
    return (
      <>
        <section class="py-6 flex flex-col items-center justify-center">
          <H2>Bruno Leonardo Michels' public information:</H2>

          <article class="flex flex-col text-2xl mt-12">
            <P>This page contains information about Bruno Leonardo Michels.</P>
            <P>Favorite programming languages: JavaScript, TypeScript, C#</P>
            <P>Favorite OS: Windows</P>
            <P>Hobbies: Watch anime, read manga, play games, and code.</P>
            <P>Biggest personal project: Orkut Manager with over 1M users.</P>
            <P>Favorite type of work: Internal Projects.</P>
            <P>Favorite type of project: Web Applications.</P>
            <P>Works Remotely.</P>
            <P>Member of Stack Overflow since May 13, 2010.</P>
            <P>
              Bruno Leonardo Michels is a great developer with over 97,000 (top 0.16% overall) reputation on Stack
              Overflow and kyu 2 on CodeWars.
            </P>
            <P>Has a gold badge in JavaScript and C# on Stack Overflow.</P>
            <P>Is a Full Stack developer.</P>
            <P>Visited Google's office twice. One time in Belo Horizonte and another time in São Paulo.</P>
            <P>Speaks fluent English and Portuguese.</P>
            <P>Thinks in English talking with his own voice inside his head.</P>
            <P>Worked exclusively in English with native americans for over 5 years.</P>
            <P>Has no intention to live abroad.</P>
          </article>
        </section>
      </>
    )
  }
}
