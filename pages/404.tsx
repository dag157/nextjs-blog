import Layout from "../components/layout";

export default function Custom404() {
    return (
        <Layout home={false} post={false}>
            <h2>Sorry the page you're looking for doesn't exist.</h2>
        </Layout>
    )
  }