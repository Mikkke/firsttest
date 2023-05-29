import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;

// export const Head = () => <Seo title="About Me" description="About me" image="/images/about.jpg" />;

// export const Head = () => <Seo title="About Me" description="About me" image="/images/about.jpg" keywords={[`gatsby`, `application`, `react`]}/>;

export default AboutPage;
