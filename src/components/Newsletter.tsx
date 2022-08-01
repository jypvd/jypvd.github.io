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
            <h2 className="section-title mt-0">Stay in the know</h2>
            <p className="section-paragraph">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
          </div>
          <Mailbox className='footer-form newsletter-form' />
        </div>
      </div>
    </section>
  )
}

export default Newsletter