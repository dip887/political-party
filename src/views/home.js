import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar6 from '../components/navbar6'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Delicious Charming Salamander</title>
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
      <Hero17
        content1={
          <Fragment>
            <span className="home-text23 thq-body-large">
              We are dedicated to bringing positive change to our community.
              Explore our website to learn more about our mission and how you
              can get involved.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text24 thq-heading-1">
              Welcome to Samajwadi Campaign
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        rootClassName="hero17root-class-name"
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text25 thq-heading-2">SPTV Section</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text26 thq-heading-2">PDA Section</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text27 thq-heading-2">Sabal Section</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text28 thq-body-small">
              Watch videos and podcasts in SPTV section
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text29 thq-body-small">
              Our Article Contents in PDA section
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text30 thq-body-small">
              Fill Darius &amp; Submit form in Sabal section
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text31">Sign Up Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text32 thq-body-large">
              Stay informed and be part of the change. Sign up to receive
              updates and get involved in our campaign.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text33 thq-heading-2">Join the Movement</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text34 thq-heading-2">About Us</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text35 thq-heading-2">Party Ideology</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text36 thq-heading-2">
              Party Constitution
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text37 thq-body-small">
              The Samajwadi Party was founded on 4th October 1992 by Shree
              Mulayam Singh Yadav and is based in Uttar Pradesh.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text38 thq-body-small">
              The Samajwadi Party believes in creating a socialist society,
              which works on the principle of equality.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text39 thq-body-small">
              Samajwadi Party’s Constitution was revised in Eighth National
              Conference in Agra, Uttar Pradesh in 2011.
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text40 thq-heading-2">
              Choose Your Candidate
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text41 thq-heading-2">Watch SPTV</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text42 thq-heading-2">Support Sabal</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text43 thq-heading-2">Explore PDA</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text44 thq-body-small">
              Learn about the candidates running for office and choose the one
              that aligns with your values and beliefs.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text45 thq-body-small">
              Tune in to our SPTV channel to watch videos and listen to our
              podcasts featuring discussions on important political issues.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text46 thq-body-small">
              Fill out the form to support Sabal&apos;s campaign and stay
              updated on upcoming events and initiatives.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text47 thq-body-small">
              Read through our articles and content in the PDA section to stay
              informed about current political affairs.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text48 thq-body-small">
              I have been following this campaign closely and I am impressed by
              the dedication and vision of the team.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text49 thq-body-small">
              The campaign&apos;s message resonates with me and I believe they
              can bring about positive change.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text50 thq-body-small">
              I support this campaign wholeheartedly. Their policies align with
              what our society needs.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text51 thq-body-small">
              As a young voter, I believe in the potential of this campaign to
              address important issues.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text52 thq-body-small">
              Read what our supporters have to say about us.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text53 thq-heading-2">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text54 thq-body-large">Dipanshu Garg</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text55 thq-body-large">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text56 thq-body-large">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text57 thq-body-large">Sarah Williams</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text58 thq-body-small">CEO, Company ABC</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text59 thq-body-small">
              Marketing Director, XYZ Inc.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text60 thq-body-small">Teacher</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text61 thq-body-small">Student</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text62 thq-body-large">
              Feel free to reach out to us for any inquiries or feedback.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text63 thq-heading-2">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text64 thq-heading-3">
              Address: Uttar Pradesh, India
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text65 thq-heading-3">
              Email: infosamajwadi.show@gmail.com
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text66 thq-body-large">
              Visit us at our main office location.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text67 thq-body-large">
              Send us an email for any questions or concerns.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text68 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text69 thq-body-small">SPTV</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text70 thq-body-small">Sabal</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text71 thq-body-small">PDA</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text72 thq-body-small">News</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text73 thq-body-small">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text74 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text75 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
