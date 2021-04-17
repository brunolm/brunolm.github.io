import Head from 'next/head'
import React from 'react'
import { SkillList } from '../../components/SkillList'

const Skills = () => {
  return (
    <div className="container">
      <Head>
        <title>Skills | Bruno Leonardo Michels - Coding Wise</title>
      </Head>

      <main>
        <h2>Skills</h2>

        <SkillList />
      </main>
    </div>
  )
}

export default Skills
