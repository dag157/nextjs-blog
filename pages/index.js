import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import iconStyle from '../styles/icons.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faFile} from '@fortawesome/free-regular-svg-icons';
import classnames from 'classnames';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  const brandlogos = classnames(utilStyles.centerContent, iconStyle.hyperLink);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={brandlogos}>
          <p><a href="../resume/Gurnari_Dominick.pdf" target="_blank"><FontAwesomeIcon className={iconStyle.brandLogo} icon={faFile} /> Resume</a> </p>
          <p><a href="https://www.linkedin.com/in/dominick-gurnari/" target="_blank"><FontAwesomeIcon className={iconStyle.brandLogo} icon={faLinkedin} /> LinkedIn</a></p>
          <p><a href="https://github.com/dag157" target="_blank"><FontAwesomeIcon className={iconStyle.brandLogo} icon={faGithub} /> Github</a></p>
        </div>
        <p>Hello, my name is Dominick. I am a software engineer👨‍💻 aspiring polyglot🇪🇸🇮🇹🇧🇷 and trying to make <a href="http://www.curieye.com" target="_blank">robot tours</a> a thing.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}><span style={{color : '#E60023'}}>Blo</span>g</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}