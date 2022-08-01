import React from 'react'
import classNames from 'classnames'
import {ReactComponent as HeroShape1} from '../assets/images/hero-shape-1.svg'
import {ReactComponent as HeroShape2} from '../assets/images/hero-shape-2.svg'
import {ReactComponent as HeroMainShape} from '../assets/images/hero-main-shape.svg'
import Mailbox from './Mailbox'

const hero = {
  title: '專注真空鍍膜20年',
  paragraph: '我們致力於PVD真空離子鍍膜，主營鐘錶、首飾、皮帶扣等高檔五金產品的鍍膜加工，加工特色有PVD黑/槍色、PVD咖啡色/藍色、爐內金、爐內玫瑰金、爐內銀、IPG1N-5N色系等。'
}

const Hero: React.FC<App.HeroProps> = (props) => {

  const heroClasses = classNames(
    'hero',
    props.className
  )

  return (
    <section className={heroClasses}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0">{hero.title}</h1>
            <p className="hero-paragraph">{hero.paragraph}</p>
            <Mailbox className='hero-form' />
          </div>
          <div className="hero-illustration">
            <div className="hero-shape hero-shape-1">
              <HeroShape1 />
            </div>
            <div className="hero-shape hero-shape-2">
              <HeroShape2 />
            </div>
            <div className="hero-main-shape">
              <HeroMainShape />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero