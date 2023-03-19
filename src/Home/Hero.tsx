export const Hero = () => {
  const expYears = new Date().getFullYear() - 2007

  return (
    <div class="bg-blue-900 bg-opacity-25 pt-4 pb-16">
      <section class="max-w-screen-xl mx-auto px-10 xl:px-4 fl sm:pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="gap-8 mt-12 mr-8 sm:mt-0">
          <p class="text-xl sm:text-3xl text-center sm:text-left">Bruno is the developer for fun!</p>
          <h1 class="w-full">
            <span class="text-emerald-500 text-5xl sm:text-6xl font-light block sm:mb-3 text-center sm:text-left pt-2">
              Fun-Driven
            </span>
            <span class="text-emerald-500 dark:text-emerald-500 text-xl sm:text-3xl font-light block sm:mb-3 text-center sm:text-left pb-2">
              World class developer!
            </span>
          </h1>
          <p class="text-xl sm:text-2xl text-center sm:text-left py-4">
            Bruno Leonardo Michels is a world class developer with over {expYears} years of experience having fun
            solving problems and increasing agency of over 1M people.
          </p>
          <div>
            <button
              class="bg-emerald-600 text-white border-emerald-600 hover:bg-transparent hover:text-emerald-600 inline-block w-full sm:w-auto px-6 py-4 border"
              href="https://www.linkedin.com/in/brunolm/"
              disabled
            >
              1-click HIRE ME! (not currently available)
            </button>
          </div>
        </div>

        <div class="mt-6 items-center">
          <img
            src="https://live.staticflickr.com/65535/51743542850_7b3befc59d_h.jpg"
            alt="Bruno Leonardo Michels"
            class="max-w-full"
            width="627"
            height="765"
            loading="lazy"
          />
          <div class="flex gap-2 my-4 justify-center">
            <a href="https://stackoverflow.com/users/340760/brunolm" target="_blank">
              <img
                alt="brunolm on stack overflow"
                src="https://img.shields.io/stackexchange/stackoverflow/r/340760?style=for-the-badge&amp;color=orange&amp;label=Stack+Overflow&amp;logo=stackoverflow&amp;logoColor=fff&amp;cacheSeconds=952000"
              />
            </a>
            <img alt="brunolm on codewars" src="https://www.codewars.com/users/brunolm/badges/micro" height="28px" />
          </div>
          <p>Bruno has over 96k reputation points on Stack Overflow and reached rank 2 on CodeWars.</p>
          <div class="flex flex-col justify-center text-center pt-6">
            <div class="flex justify-center text-center">
              <img
                alt=""
                src="https://github-readme-stats.vercel.app/api?username=brunolm&hide=contribs,prs,issues,commits&theme=tokyonight&show_icons=true"
              />
            </div>
            <span class="pt-4">
              <a
                aria-label="brunolm on github"
                href="https://github.com/brunolm"
                target="_blank"
                class="text-indigo-500 flex items-center justify-center gap-2"
              >
                <svg
                  class="h-8 w-8 text-indigo-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {' '}
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>brunolm</span>
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
