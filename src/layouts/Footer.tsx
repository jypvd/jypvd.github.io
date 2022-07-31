import React from 'react'
import classNames from 'classnames'

const Footer: React.FC<App.ComponentsProps> = (props) => {

  const footerClasses = classNames(
    'site-footer',
    props.className
  )

  return (
    <footer className={footerClasses}>
      Footer
    </footer>
  )
}

export default Footer