import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { faStackOverflow, faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const iconSize = 22

const NetworkLink = ({ link, children }) => {
  return (
    <a href={`https://brunolm.com/${link}`} target="_blank">
      {children}
    </a>
  )
}

export const ProfileNetwork = () => {
  return (
    <div>
      <NetworkLink link="so">
        <FontAwesomeIcon width={iconSize} icon={faStackOverflow} />
      </NetworkLink>
      <NetworkLink link="github">
      <FontAwesomeIcon width={iconSize} icon={faGithub} />
      </NetworkLink>
      <NetworkLink link="linkedin">
      <FontAwesomeIcon width={iconSize} icon={faLinkedin} />
      </NetworkLink>
      <NetworkLink link="twitter">
      <FontAwesomeIcon width={iconSize} icon={faTwitter} />
      </NetworkLink>
      <NetworkLink link="youtube">
      <FontAwesomeIcon width={iconSize} icon={faYoutube} />
      </NetworkLink>
    </div>
  )
}
