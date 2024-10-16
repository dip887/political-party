import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar6 from '../components/navbar6'
import Features24 from '../components/features24'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>SPTV</title>
        <meta property="og:title" content="Delicious Charming Salamander" />
      </Helmet>
      <div className="home-container2">
        <img
          alt="image"
          src="/logo.jpeg"
          className="home-image"
        />
        <div className="home-container3">
          <div className="home-container4">
            <div className="home-container5">
              <Navbar6
                link1={
                  <Fragment>
                    <span className="home-text10 thq-body-small thq-link">
                      HOME
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                }
                link2={
                  <Fragment>
                    <span className="home-text11 thq-body-small thq-link">
                      SPTV
                    </span>
                  </Fragment>
                }
                link3={
                  <Fragment>
                    <span className="home-text12 thq-body-small thq-link">
                      SABAL
                    </span>
                  </Fragment>
                }
                link4={
                  <Fragment>
                    <span className="home-text13 thq-body-small thq-link">
                      NEWS
                    </span>
                  </Fragment>
                }
                link5={
                  <Fragment>
                    <span className="home-text14 thq-body-small thq-link">
                      ABOUT US
                    </span>
                  </Fragment>
                }
                page1={
                  <Fragment>
                    <span className="home-text15 thq-body-large">Page One</span>
                  </Fragment>
                }
                page2={
                  <Fragment>
                    <span className="home-text16 thq-body-large">Page Two</span>
                  </Fragment>
                }
                page3={
                  <Fragment>
                    <span className="home-text17 thq-body-large">
                      Page Three
                    </span>
                  </Fragment>
                }
                page4={
                  <Fragment>
                    <span className="home-text18 thq-body-large">
                      Page Four
                    </span>
                  </Fragment>
                }
                rootClassName="navbar6root-class-name"
                page1Description={
                  <Fragment>
                    <span className="home-text19 thq-body-small">
                      Lorem ipsum dolor sit amet consectetur elit
                    </span>
                  </Fragment>
                }
                page2Description={
                  <Fragment>
                    <span className="home-text20 thq-body-small">
                      Lorem ipsum dolor sit amet consectetur elit
                    </span>
                  </Fragment>
                }
                page3Description={
                  <Fragment>
                    <span className="home-text21 thq-body-small">
                      Lorem ipsum dolor sit amet consectetur elit
                    </span>
                  </Fragment>
                }
                page4Description={
                  <Fragment>
                    <span className="home-text22 thq-body-small">
                      Lorem ipsum dolor sit amet consectetur elit
                    </span>
                  </Fragment>
                }
              ></Navbar6>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container6">
        <div className="home-slider">
          <div className="home-slider-slide1"></div>
          <div className="home-slider-slide2"></div>
          <div className="home-slider-slide3"></div>

          {/* Slider Pagination */}
          <div className="home-slider-pagination">
            <div className="swiper-pagination-bullet swiper-pagination-bullet-active"></div>
            <div className="swiper-pagination-bullet"></div>
            <div className="swiper-pagination-bullet"></div>
          </div>

          {/* Navigation Buttons */}
          <div className="swiper-button-prev">Prev</div>
          <div className="swiper-button-next">Next</div>
        </div>
      </div>
        <Features24
          feature1Title={
            <Fragment>
              <a
               href="https://youtu.be/1xd01gW0YCI?si=YelYnTz3l3nCt2ld"
               target="_blank"
               rel="noreferrer noopener"
               className="home-link"
              >
              <span className="home-text23 thq-heading-2">SPTV Section</span>
              </a>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text24 thq-heading-2">PDA Section</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text25 thq-heading-2">Sabal Section</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text26 thq-body-small">
                Watch videos and podcasts in SPTV section
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text27 thq-body-small">
                Our Article Contents in PDA section
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text28 thq-body-small">
                Fill Darius &amp; Submit form in Sabal section
              </span>
            </Fragment>
          }
          rootClassName="features24root-class-name"
          videoSrc="https://youtu.be/1xd01gW0YCI?si=YelYnTz3l3nCt2ld"
          textUrl="https://youtu.be/1xd01gW0YCI?si=YelYnTz3l3nCt2ld"
          feature1ImgSrc="https://youtu.be/1xd01gW0YCI?si=YelYnTz3l3nCt2ld"
          feature1ImgAlt="https://youtu.be/1xd01gW0YCI?si=YelYnTz3l3nCt2ld"
          className="home-component2"
        ></Features24>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text29 thq-heading-2">About Us</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text30 thq-heading-2">Party Ideology</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text31 thq-heading-2">
              Party Constitution
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text32 thq-body-small">
              The Samajwadi Party was founded on 4th October 1992 by Shree
              Mulayam Singh Yadav and is based in Uttar Pradesh.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text33 thq-body-small">
              The Samajwadi Party believes in creating a socialist society,
              which works on the principle of equality.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text34 thq-body-small">
              Samajwadi Party’s Constitution was revised in Eighth National
              Conference in Agra, Uttar Pradesh in 2011.
            </span>
          </Fragment>
        }
        feature1ImgSrc="/smm-1400w.jpg"
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text35 thq-heading-2">
              Choose Your Candidate
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text36 thq-heading-2">Watch SPTV</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text37 thq-heading-2">Support Sabal</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text38 thq-heading-2">Explore PDA</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text39 thq-body-small">
              Learn about the candidates running for office and choose the one
              that aligns with your values and beliefs.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text40 thq-body-small">
              Tune in to our SPTV channel to watch videos and listen to our
              podcasts featuring discussions on important political issues.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text41 thq-body-small">
              Fill out the form to support Sabal&apos;s campaign and stay
              updated on upcoming events and initiatives.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text42 thq-body-small">
              Read through our articles and content in the PDA section to stay
              informed about current political affairs.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text43 thq-body-large">
              Feel free to reach out to us for any inquiries or feedback.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text44 thq-heading-2">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text45 thq-heading-3">
              Address: Uttar Pradesh, India
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text46 thq-heading-3">
              Email: infosamajwadi.show@gmail.com
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text47 thq-body-large">
              Visit us at our main office location.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text48 thq-body-large">
              Send us an email for any questions or concerns.
            </span>
          </Fragment>
        }
        location1ImageSrc="/ssm-1400w.jpg"
        location2ImageSrc="/smmmm-1400w.jpg"
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text49 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text50 thq-body-small">SPTV</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text51 thq-body-small">Sabal</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text52 thq-body-small">PDA</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text53 thq-body-small">News</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text54 thq-body-small">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text55 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text56 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
