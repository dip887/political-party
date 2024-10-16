import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className={`hero17-header78 ${props.rootClassName} `}>
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero17-text3 thq-heading-1">
                  Welcome to Our Samajhwadi Campaign
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h1>
              </Fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="hero17-text4 thq-body-large">
                  We are dedicated to bringing positive change to our community.
                  Explore our website to learn more about our mission and how
                  you can get involved.
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions"></div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="hero17-strip1 thq-animated-group-horizontal"></div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="hero17-strip3 thq-animated-group-horizontal-reverse"></div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image4Alt: 'Hero Image',
  image3Src:
    'https://images.unsplash.com/photo-1613628851674-030c9b6a295c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODk3NzMyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  image2Alt: 'Hero Image',
  image9Src:
    'https://images.unsplash.com/photo-1671989088911-3b1fc849c037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODk3NzMyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1618289733625-b628fe729cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODk3NzMyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image11Alt: 'Hero Image',
  image1Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image4Src:
    'https://images.unsplash.com/photo-1543936126-220263a6390f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODk3NzMyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  rootClassName: '',
  image8Src:
    'https://images.unsplash.com/photo-1671523998554-ee47a502258e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODk3NzMyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Src:
    'https://images.unsplash.com/photo-1588591214165-d898eef4f91a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODk3NzMyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'Hero Image',
  image11Src:
    'https://images.unsplash.com/photo-1559847844-5315695dadae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODk3NzMyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  image3Alt: 'Hero Image',
  image8Alt: 'Hero Image',
  image7Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1709768669385-e22b79cf93f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODk3NzMyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image10Src:
    'https://images.unsplash.com/photo-1603614486387-276f74fcbe2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODk3NzMyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Campaign Image',
}

Hero17.propTypes = {
  image4Alt: PropTypes.string,
  image3Src: PropTypes.string,
  heading1: PropTypes.element,
  image2Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image5Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image4Src: PropTypes.string,
  rootClassName: PropTypes.string,
  image8Src: PropTypes.string,
  image7Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image11Src: PropTypes.string,
  content1: PropTypes.element,
  image3Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Hero17
