import React from 'react'
import classNames from 'classnames'
import {ReactComponent as Logo} from '../assets/images/logo.svg'
import {ReactComponent as HeaderShape1} from '../assets/images/header-shape-1.svg'
import {ReactComponent as HeaderShape2} from '../assets/images/header-shape-2.svg'

const Header: React.FC<App.HeaderProps> = (props) => {

  const headerClasses = classNames(
    'site-header',
    props.className
  )

  return (
    <header className={headerClasses} style={props.style}>
      <div className="header-shape header-shape-1">
        <HeaderShape1 />
      </div>
      <div className="header-shape header-shape-2">
        <HeaderShape2 />
      </div>
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1 className="m-0">
              <Logo />
            </h1>
            金鷹
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header