import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import React from 'react'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Bruno Leonardo Michels - Coding Wise</title>
      </Head>

      <section>
        <h2>Contact information</h2>
        <FontAwesomeIcon icon={faEnvelope} width="12" /> Email:{' '}
        <a href="mailto:brunolm7@gmail.com">brunolm7@gmail.com</a>
      </section>
    </>
  )
}

export default Contact
