import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'
import { Icon } from '../Shared/Icon'
import './what-i-do.css'

interface Item {
  text: Element
  icons: Array<{ element: Element } | { prefix: IconPrefix | 'fa-brands'; name: IconName; size: number }>
}

const iconSize = 24
const items: Item[] = [
  {
    text: (
      <>
        I really enjoy using Nullstack, it allows me to be very productive and not think about many layers and
        abstractions, I can fully focus on the features and getting shit done. I also enjoy using React or Angular to
        build stuff.
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
        I prefer to use Nullstack, Node.js or C# to build the backend layer. One thing that motivates me a lot is
        figuring out how to solve complex algorithms or complex problems.
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
        I use Docker a lot, it makes my life easier in a lot of different scenarios. I can easily spin up containers to
        handle database and applications for me.
      </>
    ),
    icons: [{ prefix: 'fa-brands', name: 'docker', size: iconSize }],
  },

  {
    text: <>My favorite code editor is VSCode. I've been using it since before it made into version 1.0.</>,
    icons: [{ prefix: 'fas', name: 'code', size: iconSize }],
  },

  {
    text: <>Github is my favorite, but I've also worked with GitLab and BitBucket in the past.</>,
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
        I have a lot of experience using Slack and I can easily setup many different types of integrations. My favorite
        thing is my Genos BOT. I'm also a fan of Discord.
      </>
    ),
    icons: [
      { prefix: 'fa-brands', name: 'slack', size: iconSize },
      { prefix: 'fa-brands', name: 'discord', size: iconSize },
    ],
  },
  {
    text: <>My favorite Operational System is Windows. I can run any software on it as it supports Docker and WSL.</>,
    icons: [{ prefix: 'fa-brands', name: 'windows', size: iconSize }],
  },
]

export const WhatIDo = () => {
  return (
    <div class="WhatIDo">
      <h2 class="text-2xl my-8">What I do?</h2>

      <div class="flex flex-wrap gap-4 justify-between">
        {items.map((item) => (
          <div class="block mb-8">
            <div>
              <div class="flex gap-2">
                {item.icons.map((icon) => {
                  if ('element' in icon) {
                    return icon.element
                  }

                  return <Icon prefix={icon.prefix as any} name={icon.name as any} size={icon.size} />
                })}
              </div>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
