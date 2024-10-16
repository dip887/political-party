import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              <span>
                &quot;बहराइच हिंसा पर अखिलेश का हमला: भाजपा की पुरानी रणनीति पर
                उठाए सवाल, उपचुनाव से जोड़ा&quot;
              </span>
              <br></br>
            </h2>
            <p className="thq-body-large">
              <span>
                चुनावी फायदे के लिए भाजपा ने करवाई बहराइच हिंसा, जनता समझ रही है
                ये किसकी पुरानी आदत है: अखिलेश यादव
              </span>
              <br></br>
              <br></br>
              <span>
                यूपी के बहराइच में दुर्गा प्रतिमा विसर्जन के दौरान हुई हिंसा के
                बाद जबरदस्त तनाव का माहौल है. इसको लेकर समाजवादी पार्टी के
                अध्यक्ष अखिलेश यादव ने योगी सरकार पर जमकर निशाना साधा है.
                उन्होंने सोशल मीडिया पर लिखकर योगी सरकार की सांप्रदायिक रणनीति
                का आरोप लगाया और कहा कि हिंसा और हार के डर के चलते हिंसा का
                सहारा लेना उनकी पुरानी रणनीति है. जनता सब समझ रही है और ये
                उपचुनाव की दस्तक है.
              </span>
              <br></br>
              <span>
                उन्होंने ट्वीट किया, &quot;.....दिखावटी क़ानून-व्यवस्था की जगह
                अगर सरकार सच में पुख़्ता इंतज़ाम करे तो सब सही हो जाएगा लेकिन
                ऐसा होगा तब ही जब ये सरकार चाहेगी।&quot;
              </span>
              <br></br>
              <br></br>
              <span>
                मूर्ति विसर्जन के दौरान युवक की गोली मारकर हत्या करने के मामले
                में पुलिस ने छह लोगों के खिलाफ केस दर्ज कर लिया है. यह एफआईआर
                महसी थाने में दर्ज हुई है. इसमें अब्दुल हमीद, सरफराज, फहीम,
                साहिर खान, ननकऊ और मारफ अली समेत 10 लोगों के खिलाफ मुकदमा दर्ज
                हुआ है. इन छह नामजद के अलावा चार लोग अज्ञात हैं. अब तक पुलिस ने
                इस मामले में 30 से ज्यादा लोगों को हिरासत में लिया है.
              </span>
            </p>
            <div className="steps2-actions"></div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text36 thq-heading-2">
                      Choose Your Candidate
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text35 thq-body-small">
                      Learn about the candidates running for office and choose
                      the one that aligns with your values and beliefs.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text25 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text42 thq-heading-2">Watch SPTV</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text37 thq-body-small">
                      Tune in to our SPTV channel to watch videos and listen to
                      our podcasts featuring discussions on important political
                      issues.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text28 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text41 thq-heading-2">
                      Support Sabal
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text40 thq-body-small">
                      Fill out the form to support Sabal&apos;s campaign and
                      stay updated on upcoming events and initiatives.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text31 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text38 thq-heading-2">Explore PDA</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text39 thq-body-small">
                      Read through our articles and content in the PDA section
                      to stay informed about current political affairs.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text34 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step1Description: undefined,
  step1Title: undefined,
  step2Description: undefined,
  step4Title: undefined,
  step4Description: undefined,
  step3Description: undefined,
  step3Title: undefined,
  step2Title: undefined,
}

Steps2.propTypes = {
  step1Description: PropTypes.element,
  step1Title: PropTypes.element,
  step2Description: PropTypes.element,
  step4Title: PropTypes.element,
  step4Description: PropTypes.element,
  step3Description: PropTypes.element,
  step3Title: PropTypes.element,
  step2Title: PropTypes.element,
}

export default Steps2
