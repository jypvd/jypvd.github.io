import React from 'react'
import classNames from 'classnames'
import {ReactComponent as Logo} from '../assets/images/logo.svg'
import {ReactComponent as SocialIconWeixin} from '../assets/images/social-weixin.svg'
import {ReactComponent as SocialIconQQ} from '../assets/images/social-qq.svg'
import {ReactComponent as SocialIconPhone} from '../assets/images/social-phone.svg'
import {ReactComponent as SocialIconEmail} from '../assets/images/social-email.svg'

const socials = [
  {
    name: 'Weixin',
    link: '#',
    icon: SocialIconWeixin
  },{
    name: 'QQ',
    link: '#',
    icon: SocialIconQQ
  },{
    name: 'Email',
    link: '#',
    icon: SocialIconEmail
  },{
    name: 'Phone',
    link: '#',
    icon: SocialIconPhone
  }
]

const Footer: React.FC<App.ComponentsProps> = (props) => {

  const footerClasses = classNames(
    'site-footer',
    props.className
  )

  return (
    <footer className={footerClasses}>
      <div className="container">
        <div className="site-footer-inner has-top-divider">
          <div className="brand footer-brand">
            <Logo />
          </div>
          <ul className="footer-links list-reset">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">FAQ's</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          <ul className="footer-social-links list-reset">
            {socials.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.link}>
                    <span className="screen-reader-text">{item.name}</span>
                    <item.icon width={16} height={16} />
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="footer-copyright">&copy; 2022 金鷹國際鈦金（香港）有限公司</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer