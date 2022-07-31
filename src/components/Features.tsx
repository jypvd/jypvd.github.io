import React, { useState } from 'react'
import classNames from 'classnames'
import {ReactComponent as FeatureIcon1} from '../assets/images/feature-icon-1.svg'
import {ReactComponent as FeatureIcon2} from '../assets/images/feature-icon-2.svg'
import {ReactComponent as FeatureIcon3} from '../assets/images/feature-icon-3.svg'
import {ReactComponent as FeatureIcon4} from '../assets/images/feature-icon-4.svg'

const featureContent = {
  title: 'Meet April',
  paragraph: 'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.',
  items: [
    {
      title: 'Powerful',
      text: 'A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements.',
      icon: FeatureIcon1,
      iconColor: '#FFD2DA'
    },{
      title: 'Powerful',
      text: 'A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements.',
      icon: FeatureIcon2,
      iconColor: '#FFD8CD'
    },{
      title: 'Powerful',
      text: 'A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements.',
      icon: FeatureIcon3,
      iconColor: '#C6FDF3'
    },{
      title: 'Powerful',
      text: 'A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements.',
      icon: FeatureIcon4,
      iconColor: '#E0E1FE'
    }
  ]
}

const Features: React.FC<App.FeaturesProps> = (props) => {

  const [c] = useState(featureContent)

  const featuresClasses = classNames(
    'features',
    props.className
  )

  return (
    <section className={featuresClasses}>
      <div className="container">
        <div className="features-inner section-inner">
          <div className="features-header text-center">
            <div className="container-sm">
              <h2 className="section-title mt-0">{c.title}</h2>
              <p className="section-paragraph">{c.paragraph}</p>
            </div>
          </div>
          <div className="features-wrap">
            {c.items.map((item, index) => {
              return (
                <div className="feature text-center is-revealing" key={index}>
                  <div className="feature-inner">
                    <div className="feature-icon" style={{background: item.iconColor}}>
                      <item.icon />
                    </div>
                    <h4 className="feature-title h3-mobile mb-8">{item.title}</h4>
                    <p className="text-sm">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features