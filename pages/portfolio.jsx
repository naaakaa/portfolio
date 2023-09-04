import Head from 'next/head';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">Still working on my first project.</p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img
                  src=""
                  className="portfolio-image"
                  alt="no image available"
                />

                <h4 className="portfolio-name">GitHub</h4>
                <div className="portfolio-category">Dev</div>
              </div>
              <div className="portfolio-item">
                <img
                  src=""
                  className="portfolio-image"
                  alt="no image available"
                />

                <h4 className="portfolio-name">LinkedIn</h4>
                <div className="portfolio-category">Social</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
