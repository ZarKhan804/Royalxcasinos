import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import GameSection from "./GameSection";
import ContentSection from "./ContentSection";
import InternalLinksArticle from "./InternalLinksArticle";
import Question from "./Question";

function Home() {
  return (
    <>
      <Helmet>
        <title>Royal X Casino  real game in Pakistan</title>

        <meta
          name="description"
          content="Explore Royal X Casino , including gaming features, mobile access, account information, promotions, download guidance, and responsible gaming information."
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <link rel="canonical" href="/" />
      </Helmet>

      <main>
        <HeroSection />
        <GameSection />
        <ContentSection />
        <InternalLinksArticle />
        <Question/>
      </main>
    </>
  );
}

export default Home;
