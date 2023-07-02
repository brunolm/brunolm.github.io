import Nullstack, { NullstackClientContext } from 'nullstack'
import { H2 } from '../core/H2'
import { pageMeta } from '../core/page-meta'
import { Quote } from './Quote'
import './index.css'

interface Props {
  route: string
}

const P = (ctx) => {
  return <p class="mb-4">{ctx.children}</p>
}

const randomGravatar = () => {
  return `https://gravatar.com/avatar/anonymous-${Math.random()}?d=identicon`
}

export class Work extends Nullstack<Props> {
  prepare({ project, page }: NullstackClientContext<Props>) {
    page.title = `BrunoLM Information - Powered by Nullstack!`
    page.description = pageMeta.description
  }

  render({ project }: NullstackClientContext<Props>) {
    return (
      <>
        <section class="py-6">
          <H2>What people think about Bruno</H2>

          <article class="text-lg sm:text-xl mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between">
            <Quote
              name="Evan Coopersmith"
              url="https://www.linkedin.com/in/evancoopersmithpds/"
              image="https://media.licdn.com/dms/image/C4E03AQFPlPBzZXJjiA/profile-displayphoto-shrink_400_400/0/1627392243911?e=1694044800&v=beta&t=gv-Abqg8PonYQiU6Bn1uW12pVPT_n87hbKrbJv49ncc"
            >
              <P>
                Bruno is a preternaturally gifted software engineer, but it is not in that capacity where he truly has
                distinguished himself from the many technical professionals with whom I have interacted.
              </P>

              <P>
                A good software developer will generate the appropriate solution for the question posed. A virtuoso like
                Bruno conceives of the question I never thought to ask and subsequently surfaces the insight that might
                otherwise have remained hidden.
              </P>

              <P>
                In addition to the tools he implements and the pace at which those actions are executed, he also manages
                to grasp the broader business goals that underpin the request.
              </P>

              <P>
                He is mathematically-savvy, intellectually-rigorous, and challenges those around him to improve the
                clarity of their thinking, reasoning, and coding. He sees potential improvements in everything from
                lines of javascript to business operations - then takes the initiative to ensure that potential is
                realized.
              </P>

              <P>
                Bruno isn’t the dev you hire because you need a better app (though certainly, he would succeed). Bruno
                is the dev you hire because you need to run a better business.
              </P>
            </Quote>

            <Quote
              name="Carlos Bonetti"
              url="https://www.linkedin.com/in/carlos-bonetti/"
              image="https://media.licdn.com/dms/image/C4E03AQHcYkob3qVSYQ/profile-displayphoto-shrink_400_400/0/1574901242919?e=1694044800&v=beta&t=ImFs0tvdBcNSRXaFXvU29SGAKTxQBQejVi9WawnvUss"
            >
              <P>
                Bruno is an amazing software developer and a really smart person overall! His combination of
                intelligence, commitment, technical proficiency, and an ownership mentality sets him apart. He is
                remarkably intelligent and quickly grasps complex concepts and ideas. He regards each project not just
                as a set of tasks but treats them as if they were his own. He's invested, proactive, and seizes every
                challenge as an opportunity for learning and growth.
              </P>

              <P>
                Moreover, Bruno effortlessly combines his technical skills with impressive communication abilities. He
                knows how to explain highly technical information in an easily understandable way, which fosters a
                collaborative and fruitful work environment. His readiness to assist his team members exemplifies his
                team-first mindset.
              </P>

              <P>
                Really glad to had the experience to work with him and thankful for the opportunities he also gave me!
              </P>
            </Quote>

            <Quote
              name="Pamela Gnutzmann"
              url="https://www.linkedin.com/in/pamelagnutzmann/"
              image="https://media.licdn.com/dms/image/C4E03AQEdoOSnvL16Zw/profile-displayphoto-shrink_400_400/0/1516692325951?e=1694044800&v=beta&t=01T02dIGbeSuBc29yXTj1wsyrN1xgBm3pWUkEkLA2Mo"
            >
              <P>
                The first word that comes to my mind to describe Bruno is "DOER". He is the type of developer who
                transform ideas into code.
              </P>
              <P>
                Discuss a cool app with him today and he'll probably have a first version tomorrow before you have your
                breakfast.
              </P>
              <P>
                It's clear that he likes what he does and is always trying to improve, not only as a developer but also
                as a person.
              </P>
              <P>
                I have been working with or next to him for almost 4 years and I can say he is smart, focused,
                dedicated, responsible and worried about the code and product quality. He is also always willing to
                help, regardless if you are on his team/project.
              </P>
              <P>I really enjoy working with him and believe he will be a great asset anywhere he works.</P>
            </Quote>

            <Quote name="Anonymous" url="https://www.linkedin.com/in/brunolm/" image={randomGravatar()}>
              <P>Hi Bruno, how are you?</P>
              <P>
                Just passing by to say that me and my friend/coworker used a lot the Orkut Manager, it made our life
                easier to roleplay in community xD
              </P>
              <span class="text-xs text-gray-500">* translated from pt to en</span>
            </Quote>

            <Quote
              name="Anonymous"
              url="https://www.linkedin.com/in/brunolm/"
              image={randomGravatar()}
              quoteSource={<>Slack</>}
            >
              <P>
                I did not get a chance to thank you for the great work you have done on the project. Your organization
                and Project Management skills complement your dev skills.
              </P>
              <P>Thank you again and I am hoping we will have a chance to work together again in the near future.</P>
            </Quote>

            <Quote
              name="Anonymous"
              url="https://www.linkedin.com/in/brunolm/"
              image={randomGravatar()}
              quoteSource={<>Slack</>}
            >
              <P>
                Hi Bruno! As I mentioned this morning THANK YOU SO MUCH for everything you helped us accomplish! You
                always had great ideas for solutions and I learned a lot from our collaborations.
              </P>
            </Quote>

            <Quote
              name="Anonymous"
              url="https://www.linkedin.com/in/brunolm/"
              image={randomGravatar()}
              quoteSource={<>Slack</>}
            >
              <P>
                Hi Bruno!!! A little bird told me you are back on one of our projects. I'm sorry we won't be directly
                working together, but I'm happy to hear your name connected to a project once again! I just wanted to
                say Hi! Hope you are doing really awesome!
              </P>
            </Quote>

            <Quote
              name="Anonymous"
              url="https://www.linkedin.com/in/brunolm/"
              image={randomGravatar()}
              quoteSource={<>Slack</>}
            >
              <P>
                random thing: i think [redacted project name] got to a point that its so good for me, that it deserves
                its own monitor , or maybe i just reaaaly like adding monitors haha
              </P>
            </Quote>
          </article>

          <div class="mt-24 pb-24">
            <H2>Clients</H2>

            <P>I worked for an agency that had clients such as Samsung, BioCentury, Protocol Labs, EVgo and others.</P>

            <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center bg-slate-900 p-12 mb-8">
              <div>
                <img alt="biocentury" src="/images/clients/biocentury.png" class="max-h-24" />
              </div>
              <div>
                <img alt="evgo" src="/images/clients/evgo.png" class="max-h-24" />
              </div>
              <div>
                <img alt="protocol labs" src="/images/clients/protocol-labs.png" class="max-h-24" />
              </div>
              <div>
                <img alt="ae studio" src="/images/clients/ae.jpeg" class="max-h-24" />
              </div>
            </div>

            <P>In another agency they had clients like Tribal Group, Santander, Sebrae, Softplan, and others.</P>

            <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center bg-slate-900 p-12 mb-12">
              <div>
                <img alt="tribal" src="/images/clients/tribal.png" class="max-h-24" />
              </div>
              <div>
                <img alt="santander" src="/images/clients/santander.png" class="max-h-24" />
              </div>
              <div>
                <img alt="sebrae" src="/images/clients/sebrae.png" class="max-h-24" />
              </div>
              <div>
                <img alt="softplan" src="/images/clients/softplan.png" class="max-h-24" />
              </div>
            </div>

            <div class="text-center text-xl mb-12">
              <P>
                The work that I'm most proud of is the work that I did for those agencies, more than the work I did with
                them. I really like to improve systems, increase agency.
              </P>
            </div>
          </div>
        </section>
      </>
    )
  }
}
