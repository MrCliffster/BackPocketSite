import React from "react"
import { Link } from "gatsby";
import { Image } from "../components/image";

const WhoWeAre = () => {
  return (
    <div className="section">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 ml-auto mb-5 order-2">
                    <span className="d-block text-uppercase text-primary">Who we are</span>
                    <h2>Let's build this together.</h2>
                    <p>Back Pocket is the flagship show of what (we hope) will become a large network of content oriented around, but nowhere near limited to, gaming. We listen to and work with our community to create the stuff we want to watch ourselves.</p>
                <p>We do need you to get involved though. Our show is entirely funded by our sponsors: you! Through Patreon, you can unlock interactivity in our show; gaining access to our discord, the power to vote for the content you want to see, and even the chance to come on air and chat.</p>
                <Link to="page-2" className="btn btn-outline-black">Learn more</Link>
                </div>
                <div className="col-lg-6 order-1">
                  <figure className="img-dotted-bg">
                    <Image/>
                    <Image/>
                  </figure>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre
