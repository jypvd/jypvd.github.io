import React, { useState } from 'react'
import classNames from 'classnames'
import {ReactComponent as TestimonialsShape1} from '../assets/images/testimonials-shape-1.svg'
import {ReactComponent as TestimonialsShape2} from '../assets/images/testimonials-shape-2.svg'
import {ReactComponent as TestimonialsShape3} from '../assets/images/testimonials-shape-3.svg'
import teamMember01 from '../assets/images/team-member-01.png'
import teamMember02 from '../assets/images/team-member-02.png'
import teamMember03 from '../assets/images/team-member-03.png'

const teams = {
  title: '優秀的業務團隊',
  items: [
    {
      name: '揭懂先生',
      link: '#',
      profile: '一頭有些淩亂的卷髮，黑色的大眼睛，高高的鼻樑，嘴角微微上揚，散發出自信的光芒。',
      avatarPath: teamMember01
    },{
      name: '揭朝海先生',
      link: '#',
      profile: '一位經驗老道的長者，由他解决複雜問題，便如庖丁解牛，遊刃有餘。',
      avatarPath: teamMember02
    },{
      name: '謝榮湘先生',
      link: '#',
      profile: '於鍍膜行業深耕20餘年，擁有極强的專業技能和業務能力，能超出預期完美的完成任務。',
      avatarPath: teamMember03
    }
  ]
}

const Testimonials: React.FC<App.TestimonialsProps> = (props) => {

  const [t] = useState(teams)

  const testimonialsClasses = classNames(
    'testimonials',
    props.className
  )

  return (
    <section className={testimonialsClasses}>
      <div className="testimonials-shape testimonials-shape-1">
        <TestimonialsShape1 />
      </div>
      <div className="testimonials-shape testimonials-shape-2">
        <TestimonialsShape2 />
      </div>
      <div className="testimonials-shape testimonials-shape-3">
        <TestimonialsShape3 />
      </div>
      <div className="container">
        <div className="testimonials-inner section-inner">
          <h2 className="section-title mt-0 text-center">{t.title}</h2>
          <div className="testimonials-wrap">
            {t.items.map((item, index) => {
              return (
                <div className="testimonial text-xs is-revealing" key={index}>
                  <div className="testimonial-inner">
                    <div className="testimonial-main">
                      <div className="testimonial-header">
                        <img className="mb-16" src={item.avatarPath} alt="Team Member" />
                      </div>
                      <div className="testimonial-body">
                        <p className="mb-0">{item.profile}</p>
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-link">
                        <a href={item.link}>@{item.name}</a>
                      </div>
                    </div>
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

export default Testimonials