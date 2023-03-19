import { H2 } from '../core/H2'

export const WhoAmI = () => {
  return (
    <div class="bg-teal-900 bg-opacity-25 py-16">
      <section class="max-w-screen-xl mx-auto px-10 xl:px-4 py-10 flex justify-between items-center flex-wrap">
        <div class="mb-4">
          <H2 color="text-purple-400">Who am I?</H2>

          <p class="pb-8">
            <i>Here are some facts about Bruno Leonardo Michels</i>
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-14">
            <p>
              I am a self-taught developer, and I have been developing software for over 15 years. I have worked in
              projects of my own that got over 1 million downloads.
            </p>
            <p>
              I believe that autonomous people are at least 10x more productive than people who are not, quite
              literally.
            </p>
            <p>
              When developing software, I value autonomy and challenges that allow me to apply my creativity and
              problem-solving skills.
            </p>
            <p>Some of my hobbies include watching anime, reading manga, playing games, and developing software.</p>
            <p>
              I have a blog where I write about software development, and I have a YouTube channel where I share some
              content.
            </p>
            <p>I've built the internal system for hiring, onboarding, allocations on a couple companies.</p>
            <p>I've automated a lot of processes, reports, saving hundreds of hours of work.</p>
            <p>I speak fluent English and Portuguese.</p>
            <p>I'd rather stay at home playing games instead of going out.</p>
            <p>I don't drink alcohol, but I do enjoy a good cup of coffee.</p>
            <p>I'm over 30 years old.</p>
            <p>I love Bing AI!</p>
            <p>
              Anders Hejlsberg, Scott Hanselman, Jon Skeet, and other folks at Microsoft and Stack Overflow were of
              great inspiration for me.
            </p>
            <p>My online handle is usually BrunoLM.</p>
            <p>You can contact me via Email, Twitter, or LinkedIn.</p>
            <p>I use websites in Dark Mode. If it's not available I toggle it with the Dark Reader extension.</p>
            <p>I use Microsoft Edge.</p>
            <p>I have developed extensions for Chromium and VSCode.</p>
          </div>
        </div>

        <div class="w-full flex justify-center mt-8">
          <img alt="" src="https://cdn.jsdelivr.net/gh/brunolm/brunolm@master/me.jpg" class="my-4 max-w-full" />
        </div>
      </section>
    </div>
  )
}
