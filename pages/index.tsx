import {
  faAngular,
  faBitbucket,
  faDiscord,
  faDocker,
  faGithub,
  faGitlab,
  faMicrosoft,
  faNodeJs,
  faReact,
  faSlack,
  faWindows,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faBookOpen, faCode, faGamepad, faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import React from 'react'
import styles from './index.module.css'

const ToolBlock = ({ icons, children }) => {
  return (
    <div className={styles.toolBlock}>
      <div className={styles.toolBlockIcons}>
        {icons.map((ico, i) => {
          return <FontAwesomeIcon icon={ico} width={24} key={i} />
        })}
      </div>
      <div>{children}</div>
    </div>
  )
}

const Home = () => {
  const expYears = new Date().getFullYear() - 2008

  return (
    <>
      <Head>
        <title>Bruno Leonardo Michels - Coding Wise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="intro" className={styles.intro}>
        <h2>Bruno L. Michels</h2>
        <a href="https://stackoverflow.com/users/340760/brunolm" target="_blank">
          <img
            alt=""
            src="https://img.shields.io/stackexchange/stackoverflow/r/340760?style=for-the-badge&amp;color=orange&amp;label=Stack+Overflow&amp;logo=stackoverflow&amp;logoColor=fff&amp;cacheSeconds=952000"
          />
        </a>
        <img src="https://www.codewars.com/users/brunolm/badges/micro" height="28px" />

        <p>
          Senior developer with {expYears}+ years of experience. I want to be developing with JavaScript, TypeScript,
          Node.js, Angular, React, C#. I enjoy logic challenges.
        </p>
      </section>

      <section id="what-i-do">
        <h2>What I do?</h2>

        <div className={styles.toolBlocks}>
          <ToolBlock icons={[faReact, faAngular]}>
            I prefer to use <strong>React</strong> or <strong>Angular</strong> to build the frontend layer. I'm not very
            skilled at designing things myself, but I can bring to life designs made by pros. I've created many Landing
            Pages.
          </ToolBlock>

          <ToolBlock icons={[faNodeJs, faMicrosoft]}>
            I prefer to use <strong>Node.js</strong> or <strong>C#</strong> to build the backend layer. One thing that
            motivates me a lot is figuring out how to solve complex algorithms or complex problems.
          </ToolBlock>

          <ToolBlock icons={[faDocker]}>
            I use <strong>Docker</strong> a lot, it makes my life easier in a lot of different scenarios. I can easily
            spin up containers to handle database and applications for me.
          </ToolBlock>

          <ToolBlock icons={[faCode]}>
            My favorite code editor is <strong>VSCode</strong>. I've been using it since before it made into version
            1.0.
          </ToolBlock>

          <ToolBlock icons={[faGithub, faGitlab, faBitbucket]}>
            <strong>Github</strong> is my favorite, but I've also worked with GitLab and BitBucket in the past.
          </ToolBlock>

          <ToolBlock icons={[faYoutube, faGithub]}>
            On my spare time I sometimes do Live Streams on Youtube and/or work on some Github projects.
          </ToolBlock>

          <ToolBlock icons={[faSlack, faDiscord]}>
            I have a lot of experience using <strong>Slack</strong> for communication and I can easily setup many
            different types of integrations. I'm also a fan of <strong>Discord</strong>.
          </ToolBlock>

          <ToolBlock icons={[faWindows]}>
            My favorite Operational System is <strong>Windows</strong>. I can run <i>any</i> software on it as it
            supports Docker, so creating or working on apps created from a Mac/Linux machine is not an issue. It also
            has a Linux subsystem that allows me to use Linux inside Windows. I also have experience creating PowerShell
            scripts as well as Bash scripts.
          </ToolBlock>
        </div>
      </section>

      <section id="hobbies">
        <h2>Hobbies</h2>

        <div className={styles.toolBlocks}>
          <ToolBlock icons={[faGamepad]}>I like to play games, Path of Exile, etc</ToolBlock>

          <ToolBlock icons={[faTv, faBookOpen]}>I like to watch Animes and read Manga.</ToolBlock>
        </div>
      </section>

      <section id="github-stats">
        <h2>GitHub stats</h2>
        <img alt="" src="https://github-readme-stats.vercel.app/api?username=brunolm&amp;count_private=true" />
        <br />
        <img
          alt=""
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=brunolm&amp;count_private=true&amp;layout=compact&amp;langs_count=8&amp;hide=html,css"
        />
      </section>
    </>
  )
}

export default Home
