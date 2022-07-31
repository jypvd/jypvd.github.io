import React from 'react'
import classNames from 'classnames'
import {ReactComponent as HeroShape1} from '../assets/images/hero-shape-1.svg'
import {ReactComponent as HeroShape2} from '../assets/images/hero-shape-2.svg'
import {ReactComponent as HeroMainShape} from '../assets/images/hero-main-shape.svg'

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
            <h1 className="hero-title mt-0">真空镀膜专家</h1>
            <p className="hero-paragraph">我们致力于五金的真空镀膜加工。</p>
            <div className="hero-form field field-grouped">
              <div className="control control-expanded">
                <input className="input" type="email" name="email" placeholder="請留下您的郵箱&hellip;" />
              </div>
              <div className="control">
                <a className="button button-primary button-block" href="#">我們將會聯絡您</a>
              </div>
            </div>
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