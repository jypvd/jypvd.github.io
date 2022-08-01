import React from 'react'
import classNames from 'classnames'
import Mailbox from './Mailbox'

const Newsletter: React.FC<App.NewsletterProps> = (props) => {

  const newsletterClasses = classNames(
    'newsletter',
    props.className
  )

  return (
    <section className={newsletterClasses}>
      <div className="container-sm">
        <div className="newsletter-inner section-inner">
          <div className="newsletter-header text-center">
            <h2 className="section-title mt-0">獲取更多資訊</h2>
            <p className="section-paragraph">您需要更詳細的了解我們嗎？</p>
          </div>
          <Mailbox className='footer-form newsletter-form' />
        </div>
      </div>
    </section>
  )
}

export default Newsletter