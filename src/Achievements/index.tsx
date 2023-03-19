import Nullstack, { NullstackClientContext } from 'nullstack'
import { pageMeta } from '../core/page-meta'
import './index.css'

interface Props extends NullstackClientContext {
  route: string
}

const achievements = [
  {
    name: 'Nullstack Core Member',
    image: <img alt="" src="https://nullstack.app/illustrations/nulla-hero.webp" />,
    text: (
      <>
        <p>I became a core member of Nullstack for making a few contributions with TypeScript.</p>
      </>
    ),
  },
  {
    name: 'AE Studio Stuff',
    image: <img alt="" src="images/achievements/ae-hackathon-tshirt.jpg" />,
    text: (
      <>
        <p>
          Assistant to the CEO award, MSI Gaming laptop, exclusive hackathon T-Shirt, Kimetsu no Yaiba figurines, Alexa,
          powerbank, and countless other gifts.
        </p>
      </>
    ),
  },
  {
    name: 'Google BH',
    image: <img alt="" src="images/achievements/me-google-bh.jpg" />,
    text: (
      <>
        <p class="mb-2">
          In 2007 I was in a social network called Orkut (it was bought by Google). It had these "forums" where people
          could talk about something, I was in some forums about programming, C/C++... There were many features people
          wanted in these forums, but Google never developed these features. So I implemented them with an extension.
        </p>
        <p>
          I created this extension because it was fun, because it helped me do things I wanted without having to do
          manual things every time. I learned a lot doing it, I know a lot about vanilla JavaScript because of it. And I
          also got invited to visit Google's office because of it.
        </p>
      </>
    ),
  },
  {
    name: 'Google SP',
    image: <img alt="" src="images/achievements/me-google-sp.png" />,
    text: (
      <>
        <p>
          December 2010, my second visit to a Google Office. I was invited again and they let me invite 2 friends to go
          with me.
        </p>
      </>
    ),
  },
  {
    name: 'Stack Overflow PT T-Shirt',
    image: <img alt="" src="images/achievements/stackoverflow-pt.jpg" />,
    text: (
      <>
        <p>T-Shirt awarded to the top 50 users on Stack Overflow PT Beta.</p>
      </>
    ),
  },

  {
    name: 'Hacktoberfest 2017 T-Shirt',
    image: <img alt="" src="images/achievements/hacktoberfest.jpg" />,
    text: (
      <>
        <p>Awarded for contributing to 4+ open source projects. https://hacktoberfest.digitalocean.com/</p>
      </>
    ),
  },

  {
    name: 'Firefox 4 BETA T-Shirt',
    image: <img alt="" src="images/achievements/firefox-beta4.jpg" />,
    text: (
      <>
        <p>Awarded for contributing to extensions during Firefox 4 BETA.</p>
      </>
    ),
  },

  {
    name: 'Xamarin T-Shirt',
    image: <img alt="" src="images/achievements/xamarin.jpg" />,
    text: (
      <>
        <p>Awarded for completing Xamarin tutorial project.</p>
      </>
    ),
  },

  {
    name: 'C# Corner MVP',
    image: null,
    text: (
      <>
        <p>Awarded for making a blog post with thousand of views.</p>
      </>
    ),
  },

  {
    name: '70-536: Application Development Foundation (C#) (2012)',
    image: null,
    text: (
      <>
        <p>I got passing grade on the certification test.</p>
      </>
    ),
  },

  {
    name: 'Mosarte Gift Boxes',
    image: <img alt="" src="images/achievements/mosarte.jpg" />,
    text: (
      <>
        <p>Awarded for deliverying a good product for the client.</p>
      </>
    ),
  },

  {
    name: '"Bug Killer" T-Shirt',
    image: null,
    text: (
      <>
        <p>Awarded for fixing a lot of bugs during a marathon.</p>
      </>
    ),
  },
]

export class Achievements extends Nullstack<Props> {
  prepare({ page }: Props) {
    page.title = `BrunoLM Achievements - Powered by Nullstack!`
    page.description = pageMeta.description
  }

  render({ project }: Props) {
    return (
      <section class="Achievements">
        <article>
          <h1 class="text-4xl mb-2">BrunoLM Achievements!</h1>

          <p class="mt-4 mb-8">
            Throughout my career I achieved many things, here are some of the tokens I got for achieving them.
          </p>

          <section class="flex flex-wrap justify-between gap-4">
            {achievements.map((ach) => (
              <div class="block mb-8">
                <h3 class="text-lg font-bold mb-2">{ach.name}</h3>
                <div class="mb-4">{ach.image}</div>

                <div class="text-sm">{ach.text}</div>
              </div>
            ))}
          </section>
        </article>
      </section>
    )
  }
}
