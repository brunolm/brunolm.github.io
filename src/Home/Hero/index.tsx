import { Icon } from '../../Shared/Icon'
import { CopyButton } from '../../core/CopyButton'
import Skills from './Skills'

export const Hero = () => {
  const expYears = new Date().getFullYear() - 2007

  return (
    <div class="md:pt-4 pb-16">
      <h2 class="pb-8 mb-4 font-sora text-3xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
        I’m Bruno, a fellow developer with over{' '}
        <span class="underline text-white" title="new Date().getFullYear() - 2007">
          {expYears}
        </span>{' '}
        years of experience that likes to build stuff.
      </h2>
      <div class="flex justify-center gap-8 mb-8">
        <div>
          <a
            aria-label="brunolm on github"
            href="https://github.com/brunolm"
            rel="noopener noreferrer"
            target="_blank"
            class="text-indigo-500 flex items-center justify-center gap-2 text-2xl"
          >
            <Icon prefix="fa-brands" name="github" size={32} />
            <span>GitHub</span>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/brunolm/"
            target="_blank"
            rel="noopener noreferrer"
            class="justify-center flex items-center gap-2 text-blue-600 text-2xl"
          >
            <Icon prefix="fa-brands" name="linkedin" size={32} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <section class="bg-gray-900 rounded-3xl text-xl mb-4">
        <div class="p-6 pt-10 flex items-center justify-center gap-8">
          <div class="hidden sm:block sm:w-52">
            <img
              alt="bruno"
              class="rounded-full"
              src="https://www.gravatar.com/avatar/ef1a0f00d57917768acdc5b379ca1b28?s=200"
            />{' '}
          </div>
          <div class="flex-1">
            <p class="pb-4">
              I’ve been working mostly with <b>Web Development</b> using
              <br />
              <span class="font-bold text-amber-500">JavaScript</span>,{' '}
              <span class="font-bold text-blue-600">TypeScript</span>,{' '}
              <span class="font-bold text-purple-600">Nullstack</span>,{' '}
              <span class="font-bold text-sky-500">React</span>, <span class="font-bold text-red-500">Angular</span>,{' '}
              <span class="font-bold text-green-500">Node.js</span>, <span class="font-bold text-purple-600">C#</span>,
              SQL.
            </p>
            <p class="pb-4">
              I’ve built many custom tailored internal systems and tools to manage entire companies. And I've also
              worked on websites that were used by millions of users.
            </p>
            <p class="pb-4">
              I love building tools to increase agency, since I started coding I’ve been creating tools to make myself
              and the companies I worked for more productive.
            </p>
          </div>
        </div>

        <div class="p-6 flex items-center justify-center gap-8">
          <div class="flex-1">
            <p class="pb-4">
              I’ve asked and answered a lot of questions on <b>Stack Overflow</b>. I'm a member since 2010 and I’ve
              gotten a lot of reputation points (over <b class="font-bold text-red-500">97,000</b>), making me the{' '}
              <b class="font-bold text-amber-500">top 0.16% overall</b>. I’ve also had a lot of fun on CodeWars, solving
              a lot of different challenges and climbing up to <span class="font-bold text-purple-600">kyu 2</span>.
            </p>
          </div>
          <div class="w-64 hidden sm:block">
            <a href="https://stackoverflow.com/users/340760/brunolm" target="_blank">
              <img
                src="https://stackoverflow.com/users/flair/340760.png?theme=dark"
                class="h-max"
                width={416}
                height={116}
                alt="profile for BrunoLM at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                title="profile for BrunoLM at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
              />
            </a>
          </div>
        </div>

        <div class="pb-6">
          <a href="/achievements" class="text-center block text-white underline">
            see more achievements »
          </a>
        </div>
      </section>

      <div class="py-4 my-4 text-center text-xl bg-green-900">
        If you want to hire me, drop me an email at: <b>brunolm7@gmail.com</b>
        <CopyButton className="ml-2 px-2 py-1 rounded-md bg-green-700 text-white" text="brunolm7@gmail.com" />
        <p class="text-sm">
          I'm currently <b>open</b> to new opportunities.
        </p>
      </div>

      <Skills />
    </div>
  )
}
