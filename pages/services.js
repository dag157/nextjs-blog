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
            <Card 
                img_path='/images/sitemap-solid.svg'
                card_title='Mock Interviews'
                card_txt='The mock interview sessions include behavioral and technical portions. I offer both 30 minute phone screens and 1 hour technical interviews. After the interview, I will follow up with a detailed report within 24 hours with an evaluation, including improved question responses and resources to help you improve your interviewing skills.'
                card_height={1008}
                card_width={820}
            >
            </Card>
        </div>
        <br />
        <div className={utilStyles.centerContent}>
            <Card 
                img_path='/images/file-solid.svg' 
                card_title='Resume Review'
                card_txt='The resume service will include a detailed report on your resume, including ways you can improve it and general feedback. I also offer to help you create a new resume if needed.'
                card_height={1008}
                card_width={420}
                reverse
            >
            </Card>
        </div>
        <br />
        <div className={utilStyles.centerContent}>
            <Card 
                img_path='/images/chalkboard-teacher-solid.svg'
                card_title='Tutoring'
                card_txt='Interested in learning how to program? I offer one on one live sessions to teach you the basics. Some general topics include web development, object oriented programming and cloud services.'
                card_height={1008}
                card_width={420}
            >
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