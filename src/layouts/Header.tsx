import React from 'react'
import classNames from 'classnames'

const Header: React.FC<App.HeaderProps> = (props) => {

  const headerClasses = classNames(
    '',
    props.className
  )

  return (
    <header className={headerClasses} style={props.style}>
      Header
    </header>
  )
}

export default Header