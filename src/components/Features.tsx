import React, { useState } from 'react'
import classNames from 'classnames'
import {ReactComponent as FeatureIcon1} from '../assets/images/feature-icon-1.svg'
import {ReactComponent as FeatureIcon2} from '../assets/images/feature-icon-2.svg'
import {ReactComponent as FeatureIcon3} from '../assets/images/feature-icon-3.svg'
import {ReactComponent as FeatureIcon4} from '../assets/images/feature-icon-4.svg'

const featureContent = {
  title: '您信賴的服務商',
  paragraph: '我們提供的真空鍍膜解決方案和服務能够實現具有精確性、創新性、經濟性和可持續性的製造。',
  items: [
    {
      title: '真誠服務',
      text: '金鷹在行業良好的口碑，得益於我們可靠且貼心的服務。',
      icon: FeatureIcon1,
      iconColor: '#FFD2DA'
    },{
      title: '穩定品質',
      text: '我們的技術團隊穩重務實，產品品質穩定堅如磐石。',
      icon: FeatureIcon2,
      iconColor: '#FFD8CD'
    },{
      title: '準時交付',
      text: '以結果導向的準時交付管理模式，讓我們的管理者明確每個產品的交付時間節點，並以此為目標推動生產。',
      icon: FeatureIcon3,
      iconColor: '#C6FDF3'
    },{
      title: '精準數據',
      text: '企業數字化管理讓我們對生產數據瞭若指掌，大大提高生產效率及訂單結案率。',
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