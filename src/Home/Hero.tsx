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
        </div>
      </section>
    </div>
  )
}
