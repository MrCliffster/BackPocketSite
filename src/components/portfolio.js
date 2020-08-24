import React from "react"
import PortfolioSingle from "./portfolioSingle"

const Portfolio = () => {
  return (
    <>
      <div className="section portfolio-section">
        <div className="container">
          <div className="row mb-5 justify-content-center aos-init aos-animate">
            <div className="col-md-8 text-center">
              <h2 className="mb-4 section-title">Our latest videos</h2>
              <p>
                Take a look at our latest videos, uploaded on Youtube or as vods
                from Twitch. We stream live on Twitch on Thursdays from 8pm.
              </p>
              <p>
                <a href="https://www.youtube.com/c/BackPocketChannel">
                  Check out Youtube
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mb-5 no-gutters">
            <PortfolioSingle
              videoTitle="The One Where The Gang Go Skiing Without Nich - Back Pocket Tonight"
              videoUri="https://www.youtube.com/embed/EOLmO4-ex-Y"
            />
            <PortfolioSingle
              videoTitle='Back Pocket: Playback "Necrobarista"'
              videoUri="https://www.youtube.com/embed/1cpt5Fc5OzE"
            />
            <PortfolioSingle
              videoTitle="Luigi Doesn't Pass the Mario Bechdel Test - Back Pocket Tonight"
              videoUri="https://www.youtube.com/embed/aVbdWSlfrJg"
            />
            <PortfolioSingle
              videoTitle="Back Pocket Launch Stream + Xbox Showcase"
              videoUri="https://www.youtube.com/embed/6_SzlddcPs8"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
