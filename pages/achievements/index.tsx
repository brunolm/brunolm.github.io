import Head from 'next/head'
import React from 'react'
import styles from './index.module.css'

const Achievements = () => {
  return (
    <>
      <Head>
        <title>Achievements | Bruno Leonardo Michels - Coding Wise</title>
      </Head>

      <h2>Achievements</h2>
      <p>Throughout my career I achieved many things, here are some of the tokens I got for achieving them.</p>

      <section className={styles.section}>
        <div className={styles.box}>
          <h3>Google BH</h3>
          <img alt="" src="/images/achievements/me-google-bh.jpg" />

          <p>
            In 2007 I was in a social network called Orkut (it was bought by Google). It had these "forums" where people
            could talk about something, I was in some forums about programming, C/C++... There were many features people
            wanted in these forums, but Google never developed these features. So I implemented them with an extension.
          </p>
          <p>
            I created this extension because it was fun, because it helped me do things I wanted without having to do
            manual things every time. I learned a lot doing it, I know a lot about vanilla JavaScript because of it. And
            I also got invited to visit Google's office because of it.
          </p>
        </div>

        <div className={styles.box}>
          <h3>Google SP</h3>
          <img alt="" src="/images/achievements/me-google-sp.png" />

          <p>
            December 2010, my second visit to a Google Office. I was invited again and they let me invite 2 friends to
            go with me.
          </p>
        </div>

        <div className={styles.box}>
          <h3>Stack Overflow PT T-Shirt</h3>
          <img alt="" src="/images/achievements/stackoverflow-pt.jpg" />

          <p>T-Shirt awarded to the top 50 users on Stack Overflow PT Beta.</p>
        </div>

        <div className={styles.box}>
          <h3>Hacktoberfest 2017 T-Shirt</h3>
          <img alt="" src="/images/achievements/hacktoberfest.jpg" />
          <p>Awarded for contributing to 4+ open source projects. https://hacktoberfest.digitalocean.com/</p>
        </div>

        <div className={styles.box}>
          <h3>Firefox 4 BETA T-Shirt</h3>
          <img alt="" src="/images/achievements/firefox-beta4.jpg" />
          <p>Awarded for contributing to extensions during Firefox 4 BETA.</p>
        </div>

        <div className={styles.box}>
          <h3>Xamarin T-Shirt</h3>
          <img alt="" src="/images/achievements/xamarin.jpg" />
          <p>Awarded for completing Xamarin tutorial project.</p>
        </div>

        <div className={styles.box}>
          <h3>C# Corner MVP</h3>
          <p>Awarded for making a blog post with thousand of views.</p>
        </div>

        <div className={styles.box}>
          <h3>70-536: Application Development Foundation (C#) (2012)</h3>
          <p>I got passing grade on the certification test.</p>
        </div>

        <div className={styles.box}>
          <h3>Mosarte Gift Boxes</h3>
          <img alt="" src="/images/achievements/mosarte.jpg" />
          <p>Awarded for deliverying a good product for the client.</p>
        </div>

        <div className={styles.box}>
          <h3>"Bug Killer" T-Shirt</h3>
          <p>Awarded for fixing a lot of bugs during a marathon.</p>
        </div>
      </section>
    </>
  )
}

export default Achievements
