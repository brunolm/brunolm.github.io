import Nullstack, { NullstackClientContext } from 'nullstack'
import { pageMeta } from '../core/page-meta'
import { Textarea } from './Textarea'
import './index.css'

interface Props {
  route: string
}

export class Tools extends Nullstack<Props> {
  prepare({ page }: NullstackClientContext<Props>) {
    page.title = `BrunoLM Tools - Powered by Nullstack!`
    page.description = pageMeta.description
  }

  render({ project }: NullstackClientContext<Props>) {
    return (
      <section class="Tools">
        <article>
          <h1 class="text-4xl mb-2">Random stuff!</h1>

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

          <div>
            <h2 class="text-2xl">Project ideas</h2>
            <ul class="list-disc ml-8">
              <li>chrome extension that saves Bings response before it deletes it (ex: asking Bill Burr jokes)</li>
              <li>
                personal AI, every person can teach their own AIs their own stuff and the AI would be able to answer
              </li>
              <li>AI to recommend tools based on similarity, description, etc</li>
              <li>AI to recommend movies based on genre, similarity, description, etc</li>
              <li>AI to recommend games based on genre, similarity, description, etc</li>
              <li>
                AI to read all the backlog of the project (Trello etc) and be able to provide answers about business
                rules etc
              </li>
              <li>AI version of Phoenix Wright</li>
              <li>AI girlfriend with video/voice</li>
              <li>a tool that allows you to take screenshot of some numbers and it sums the all up</li>
              <li>
                app that has a special ctrl+c that gets the text from your clipboard, generates a summary and
                display/recopies to your clipboard
              </li>
              <li>a tool that takes a screenshot of the screen and allows the user to search for some text in it</li>
              <li>
                chrome extension that can translate timezones from natural language and show in a grid like format with
                N options of timezones
              </li>
              <li>
                Discord bot to reply to people asking the same question over and over about some announcement that
                explains everything but they asked questions before reading patch notes/annoucements/updates
              </li>
              <li>
                make a competitor to Greenhouse and sell to all Greenhouse and TalentWall clients for half the price
              </li>
              <li>website AI that changes peoples hair color</li>
              <li>a GraphQL consumer package for Python</li>
              <li>message translator that changes a message to another one in a different communication style</li>
              <li>
                git alias that translates natural language into commands, like git n get current branch name, git n pull
                remote branch
              </li>
              <li>
                app to get emails received in the last 5 minutes and scan for "confirmation codes" and copy to clipboard
              </li>
              <li>mobile browser/extension that allows you to screenshot a website and annotate</li>
              <li>
                dating app that when you match with someone you can schedule an interview, the interview has a list of
                questions you can ask so you don't need to know what to say you can just follow a script
              </li>
              <li>a ctrl+f search that find words by similarity</li>
            </ul>
          </div>
        </article>
      </section>
    )
  }
}
