import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {/* Corrected iframe */}
          <iframe
            src="https://www.youtube.com/embed/1xd01gW0YCI" // Correct embed URL
            allowFullScreen // Correctly set allowFullScreen as boolean
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Correct attributes
            className="features24-iframe"
          ></iframe>
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features24-text5 thq-heading-2">
                      SPTV Section
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text6 thq-body-small">
                      Watch videos and podcasts in SPTV section
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features24-text2 thq-heading-2">
                      PDA Section
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features24-text3 thq-body-small">
                      Our Article Contents in PDA section
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features24-text1 thq-heading-2">
                      Sabal Section
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features24-text4 thq-body-small">
                      Fill Darius &amp; Submit form in Sabal section
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature3Title: undefined,
  feature2Title: undefined,
  feature2Description: undefined,
  feature3Description: undefined,
  feature1Title: undefined,
  feature1Description: undefined,
  rootClassName: '',
}

Features24.propTypes = {
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Features24
