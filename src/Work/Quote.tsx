import { NullstackClientContext } from 'nullstack'

interface Props {
  name: string
  image: string
  url: string
  quoteSource?: any
}

export const Quote = (ctx: Partial<NullstackClientContext<Props>>) => {
  return (
    <div class="flex flex-col py-4 px-8 bg-gray-900 shadow-lg rounded-lg">
      <div class="flex flex-col items-center gap-4 justify-center mt-4 mb-8">
        <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={ctx.image} />
        <a href={ctx.url} class="text-xl font-medium text-indigo-500" target="_blank" rel="noopener noreferrer">
          {ctx.name}
        </a>
      </div>
      <div class="flex-grow">{ctx.children}</div>
      <div class="text-right text-sm text-gray-400">
        source:{' '}
        {ctx.quoteSource ?? (
          <a href="https://www.linkedin.com/in/brunolm/" target="_blank" rel="noopener noreferrer">
            linkedin.com
          </a>
        )}
      </div>
    </div>
  )
}
