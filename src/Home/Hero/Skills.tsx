import Nullstack from 'nullstack'

enum Badge {
  Gold = 'Gold',
  Silver = 'Silver',
  Bronze = 'Bronze',
}

const skills = [
  {
    name: 'JavaScript',
    alias: 'js',
    years: new Date().getFullYear() - 2007,
    since: 2007,
    badge: Badge.Gold,
  },
  {
    name: 'TypeScript',
    alias: 'ts',
    years: new Date().getFullYear() - 2013,
    since: 2013,
    badge: Badge.Bronze,
  },
  {
    name: 'React',
    years: new Date().getFullYear() - 2015,
    since: 2015,
    badge: '',
  },
  {
    name: 'Angular',
    years: 3,
    since: 2015,
    badge: '',
  },
  {
    name: 'Node.js',
    alias: 'node',
    years: new Date().getFullYear() - 2015,
    since: 2015,
    badge: '',
  },
  {
    name: 'C#',
    alias: 'csharp',
    years: 8,
    since: 2008,
    badge: Badge.Gold,
  },
  {
    name: 'ASP.NET',
    years: 5,
    since: 2008,
    badge: Badge.Silver,
  },
  {
    name: 'Nullstack',
    alias: 'ns',
    years: 1,
    since: 2022,
    badge: '',
  },
  {
    name: 'Next.js',
    years: 3,
    since: 2020,
    badge: '',
  },
  {
    name: 'GraphQL',
    years: 2,
    since: 2019,
    badge: '',
  },
  {
    name: 'PostgreSQL',
    years: 6,
    since: 2015,
    badge: '',
  },
  {
    name: 'SQL Server',
    alias: 'sqlserver',
    years: 9,
    since: 2008,
    badge: '',
  },
  {
    name: 'mySQL',
    years: 4,
    since: 2009,
    badge: '',
  },
  {
    name: 'Redis',
    years: 1,
    since: 2016,
    badge: '',
  },
  {
    name: 'MongoDB',
    years: 2,
    since: 2021,
    badge: '',
  },
  {
    name: 'Docker',
    years: 2,
    since: 2015,
    badge: '',
  },
  {
    name: 'Tailwind',
    years: 2,
    since: 2021,
    badge: '',
  },
  {
    name: 'Material UI',
    years: 5,
    since: 2016,
    badge: '',
  },
  {
    name: 'Vercel',
    years: 2,
    since: 2021,
    badge: '',
  },
  {
    name: 'Heroku',
    years: 5,
    since: 2018,
    badge: '',
  },
  {
    name: 'Azure',
    years: 1,
    since: 2019,
    badge: '',
  },
  {
    name: 'AWS',
    years: 2,
    since: 2021,
    badge: '',
  },
  {
    name: 'Figma',
    years: 0.0002,
    since: 2023,
    badge: '',
  },
  {
    name: 'Tensorflow',
    years: 0.0001,
    since: 2023,
    badge: '',
  },
].sort((a, b) => b.years - a.years)

class Skills extends Nullstack {
  search = ''

  render() {
    const filteredSkills = skills.filter((skill) => {
      if (!this.search) {
        return true
      }

      const langsToSearch = this.search?.split(',').map((lang) => lang.trim().toUpperCase())

      return langsToSearch?.some(
        (lang) =>
          lang?.length &&
          (skill.name.toUpperCase().startsWith(lang) || (skill.alias && skill.alias.toUpperCase().startsWith(lang))),
      )
    })

    // calculate the compatibility based on the number of search terms and found terms
    const compatibility = Math.min(
      100,
      Math.round((filteredSkills.length / this.search.replace(/,$/, '').split(',').length) * 100),
    )

    return (
      <>
        <h2 class="text-xl font-bold py-4">Bruno's Skills</h2>
        <div class="pb-8">
          <input
            placeholder="Type here to search through my skills, you can search multiple skills like this: javascript, typescript, react"
            class="w-full rounded-lg border border-gray-700 p-4 text-black placeholder-gray-600"
            bind={this.search}
          />
          {this.search ? <>I'm {compatibility}% compatible with your needs.</> : ''}
        </div>

        <table class="border-collapse table-auto w-full text-sm">
          <thead>
            <tr>
              <th class="border-b font-medium text-white p-4 pl-8 pt-0 pb-3 text-left">Name</th>
              <th class="border-b font-medium text-white p-4 pt-0 pb-3 text-left">Years</th>
              <th class="border-b font-medium text-white p-4 pt-0 pb-3 text-left">Since</th>
              <th class="border-b font-medium text-white p-4 pr-8 pt-0 pb-3 text-left">
                <span title="Stack Overflow badge">SO Badge</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredSkills.map((skill) => (
              <tr>
                <td class="border-b border-slate-700 text-white p-4 pl-8">{skill.name}</td>
                <td class="border-b border-slate-700 text-white p-4">{skill.years}</td>
                <td class="border-b border-slate-700 text-white p-4">{skill.since}</td>
                <td class="border-b border-slate-700 text-white p-4 pr-8">
                  <span
                    class={[
                      skill.badge === Badge.Gold && 'text-yellow-400',
                      skill.badge === Badge.Silver && 'text-gray-400',
                      skill.badge === Badge.Bronze && 'text-yellow-700',
                    ]}
                  >
                    {skill.badge}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}

export default Skills
