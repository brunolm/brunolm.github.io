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
            class="text-indigo-500 flex items-center justify-center gap-2 text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github scale-150 mr-1"
              viewBox="0 0 16 16"
            >
              {' '}
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />{' '}
            </svg>
            <span>GitHub</span>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/brunolm/"
            target="_blank"
            rel="noopener noreferrer"
            class="justify-center flex items-center gap-2 text-blue-600 text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-linkedin scale-150 mr-1"
              viewBox="0 0 16 16"
            >
              {' '}
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{' '}
            </svg>
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
