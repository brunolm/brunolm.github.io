import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'
import { NullstackNode } from 'nullstack'
import { Icon } from '../Shared/Icon'
import { H2 } from '../core/H2'

interface Item {
  text: NullstackNode
  icons: Array<{ element: NullstackNode } | { prefix: IconPrefix | 'fa-brands'; name: IconName; size: number }>
}

const iconSize = 24
const items: Item[] = [
  {
    text: (
      <>
        Nullstack is a great tool for me, as it enables me to work efficiently and avoid unnecessary complexity. I can
        concentrate on the functionality and deliverables of my projects. I also have plenty experience with React and
        Angular and can work with them with ease.
      </>
    ),
    icons: [
      { element: <img alt="ll" src="/icon-72x72.png" class="w-6 h-6" /> },
      { prefix: 'fa-brands', name: 'react', size: iconSize },
      { prefix: 'fa-brands', name: 'angular', size: iconSize },
    ],
  },

  {
    text: (
      <>
        Nullstack is my preferred tool for building backends as well, but I can also adapt to Node.js or C#. I have
        experience building applications with Next.js, Express, dotnet core. I find it very rewarding to solve complex
        algorithms or problems and implement them in code, I got to kyu 2 in CodeWars by solving challenges.
      </>
    ),
    icons: [
      { element: <img alt="ll" src="/icon-72x72.png" class="w-6 h-6" /> },
      { prefix: 'fa-brands', name: 'node-js', size: iconSize },
      { prefix: 'fa-brands', name: 'microsoft', size: iconSize },
    ],
  },

  {
    text: (
      <>
        VSCode is my preferred code editor. I have been using it since its early stages of development (before version
        1.0).
      </>
    ),
    icons: [{ prefix: 'fas', name: 'code', size: iconSize }],
  },

  {
    text: (
      <>
        Github is my preferred platform for version control and collaboration, but I also have experience with Azure,
        GitLab, and BitBucket.
      </>
    ),
    icons: [
      { prefix: 'fa-brands', name: 'github', size: iconSize },
      { prefix: 'fa-brands', name: 'gitlab', size: iconSize },
      { prefix: 'fa-brands', name: 'bitbucket', size: iconSize },
    ],
  },

  {
    text: <>On my spare time I sometimes do Live Streams on Youtube and/or work on some Github projects.</>,
    icons: [
      { prefix: 'fa-brands', name: 'youtube', size: iconSize },
      { prefix: 'fa-brands', name: 'github', size: iconSize },
    ],
  },

  {
    text: (
      <>
        I am very used to Slack and I can configure various types of integrations and make new plugins. One of my
        projects is called Genos (a reference to One Punch Man), it's a bot for Slack that I always adapt to my current
        context. I also have experience with Discord and could work with it as well. I do use Discord for side projects
        and gaming.
      </>
    ),
    icons: [
      { prefix: 'fa-brands', name: 'slack', size: iconSize },
      { prefix: 'fa-brands', name: 'discord', size: iconSize },
    ],
  },
  {
    text: (
      <>
        Windows is my preferred operating system. It allows me to run any software I need with Docker and WSL support.
        I've been using Windows for development since I started.
      </>
    ),
    icons: [{ prefix: 'fa-brands', name: 'windows', size: iconSize }],
  },

  {
    text: (
      <>
        Docker can be very useful, as it simplifies many different scenarios. I can quickly create and manage containers
        to run database and applications for my projects. But if I have the choice I'll always choose to code directly
        as it's simpler and faster.
      </>
    ),
    icons: [{ prefix: 'fa-brands', name: 'docker', size: iconSize }],
  },
]

export const WhatIDo = () => {
  return (
    <div class="bg-sky-900 bg-opacity-25 py-16">
      <section class="max-w-screen-xl mx-auto px-10 xl:px-4 py-10 flex justify-between items-center flex-wrap">
        <H2 color="text-amber-500">What I do?</H2>

        <p class="pb-8">
          As a Senior Software Engineer, I develop and blog about various technologies. My expertise lies in JavaScript
          and C#, as well as frameworks and libraries such as Nullstack, React, Node.js, Dotnet Core and Next.js.
        </p>

        <p class="pb-8">
          I help business grow by building applications that solve their problems. That is not limited to clients, if I
          work for an agency I'm going to do everything in my power to make the agency itself better. I love working on
          internal tools, increase agency, create/optimize processes.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-between">
          {items.map((item) => (
            <div class="mb-8">
              <div>
                <div class="flex gap-2">
                  {item.icons.map((icon) => {
                    if ('element' in icon) {
                      return icon.element
                    }

                    return <Icon prefix={icon.prefix as any} name={icon.name as any} size={icon.size} />
                  })}
                </div>
                <p class="mt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
