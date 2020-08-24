import React from "react"

const PortfolioSingle = ({ videoUri, videoTitle }) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-6">
      <span className="embed-responsive embed-responsive-16by9 work-video">
        <iframe
          src={videoUri}
          frameBorder="0"
          allowFullScreen
          title={videoTitle}
        />
      </span>
    </div>
  )
}
//aos-init aos-animate
export default PortfolioSingle
