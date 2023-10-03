import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>We'd love to share our favorite drinks with you! Look through our cocktail collection by clicking 'Recipes'!
          {/* Feel free to share your own favorite cocktails by clicking 'Add Recipe' in the top right corner! */}
        </p>
      </section>
    </Layout>
  );
}