import { Helmet } from "react-helmet-async";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import InternalLinksArticle from "./InternalLinksArticle";
import Question from "./Question";

function About() {
  return (
    <>
      <Helmet>
        <title>About Royal X Casino  | Gaming Platform Information</title>

        <meta
          name="description"
          content="Learn about Royal X Casino , its gaming platform, available features, mobile access, account guidance, and responsible gaming information."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://royalxcasinos777.com/about"
        />
      </Helmet>

      <main>
        <AboutHero />
        <AboutContent />
        <InternalLinksArticle />
        <Question/>
        <Question/>
      </main>
    </>
  );
}

export default About;