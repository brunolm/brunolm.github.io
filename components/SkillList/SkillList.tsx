import { Chip } from '@material-ui/core'
import React from 'react'
import { useStyles } from './SkillList.styles'
import { skills } from './skills'

export const SkillList = () => {
  const styles = useStyles()

  return (
    <>
      <div className={styles.root}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skill}>
            <div className={styles.skillTitle}>
              <h3>{skill.name}</h3>
              <span>{skill.years}y exp</span>
            </div>
            {skill.badge && (
              <Chip label={`${skill.badge} badge`} className={styles[skill.badge]} title="Stack Overflow badge" />
            )}
          </div>
        ))}
      </div>
    </>
  )
}
