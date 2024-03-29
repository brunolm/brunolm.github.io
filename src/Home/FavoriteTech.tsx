import NullstackLogo from 'nullstack/logo'
import { H2 } from '../core/H2'

export const FavoriteTech = () => {
  return (
    <div class="bg-purple-900 bg-opacity-25 py-16">
      <section class="max-w-screen-xl mx-auto px-10 xl:px-4 py-10 flex justify-between items-center flex-wrap">
        <H2 color="text-cyan-300">Favorite technologies, languages, frameworks</H2>

        <p class="py-4 text-xl mb-2">
          Bruno Leonardo Michels' favorite programming language and technologies are: JavaScript, TypeScript, Nullstack,
          React, Angular, Node.js, C#, Dotnet Core.
          <br />
          Favorite OS: Windows
        </p>

        <ul class="flex flex-wrap gap-6">
          <li>
            <img
              alt="JavaScript"
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
            />
          </li>
          <li>
            <img
              alt="TypeScript"
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
            />
          </li>
          <li>
            <NullstackLogo light height={28} />
          </li>
          <li>
            <img
              alt="React"
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
            />
          </li>
          <li>
            <img
              alt="Angular"
              src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"
            />
          </li>
          <li>
            <img
              alt="Node.js"
              src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
            />
          </li>
          <li>
            <img
              alt="C#"
              src="https://img.shields.io/badge/c%23-blue.svg?style=for-the-badge&logo=csharp&logoColor=white"
            />
          </li>
        </ul>
      </section>
    </div>
  )
}
