import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import RedText from '../components/redtext';
import utilStyles from '../styles/utils.module.css'
import iconStyle from '../styles/icons.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import classnames from 'classnames';
import Sharebuttons from '../components/sharebuttons';
import Card from '../components/card';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Services({ allPostsData }) {
  const brandlogos = classnames(utilStyles.centerContent, iconStyle.hyperLink);
  return (
    <Layout>
      <Head>
        <title>Services</title>
      </Head>
      <section className={utilStyles.headingMd}>
        
        
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXl}><RedText str={'Services'}></RedText></h1>
        <div className={utilStyles.centerContent}>
            <Card img_path='/images/sitemap-solid.svg'>
            </Card>
        </div>
        <br />
        <div className={utilStyles.centerContent}>
            <Card img_path='/images/file-solid.svg' reverse>
            </Card>
        </div>
        <br />
        <div className={utilStyles.centerContent}>
            <Card img_path='/images/chalkboard-teacher-solid.svg'>
            </Card>
        </div>
        <br />
        <div className={utilStyles.centerContent}>
            <Link className={utilStyles.button} href='https://calendly.com/dominickgurnari/schedule'>
                <button className={utilStyles.button} type="button">Schedule a session with me</button>
            </Link>
        </div>
      </section>
      <br />
      <Sharebuttons postURL={'services'} />
    </Layout>
  )
}