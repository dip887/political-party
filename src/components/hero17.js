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
          <div className="thq-animated-group-horizontal">
            <img
              alt="image"
              src={"/p.jpeg"}
              className="hero17-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/sm.jpg"
              className="hero17-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/smm.jpg"
              className="hero17-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/smmm.jpg"
              className="hero17-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/pos.jpg"
              className="hero17-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt="image"
              src="/ssm.jpg"
              className="hero17-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/sm.jpg"
              className="hero17-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/smmmmm.jpg"
              className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/smmmmm.jpg"
              className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/pos.jpg"
              className="hero17-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt="image"
              src="/s1.jpg"
              className="hero17-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/s2.jpg"
              className="hero17-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/s5.jpg"
              className="hero17-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/s6.jpg"
              className="hero17-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/s7.jpg"
              className="hero17-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/s8.jpg"
              className="hero17-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt="image"
              src="/s10.jpg" 
              className="hero17-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/s11.jpg" 
              className="hero17-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/s12.jpg" 
              className="hero17-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/s13.jpg"c
              lassName="hero17-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/s14.jpg"c
              lassName="hero17-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="image"
              src="/s15.jpg" 
                   className="hero17-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
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
  image12Src:
    'https://images.unsplash.com/photo-1571504940504-7c91d1286bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODk3NzMyM3w&ixlib=rb-4.0.3&q=80&w=1080',
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
  image12Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1460518451285-97b6aa326961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODk3NzMyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image8Alt: 'Hero Image',
  image7Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1709768669385-e22b79cf93f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODk3NzMyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Hero Image',
  image10Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image10Src:
    'https://images.unsplash.com/photo-1603614486387-276f74fcbe2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODk3NzMyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Campaign Image',
}

Hero17.propTypes = {
  image4Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image12Src: PropTypes.string,
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
  image12Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Hero17
