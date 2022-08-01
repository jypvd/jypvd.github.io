import React from 'react'
import classNames from 'classnames'

const Mailbox: React.FC<App.MailboxProps> = (props) => {

  const mailboxClasses = classNames(
    'field',
    'field-grouped',
    props.className
  )

  return (
    <div className={mailboxClasses}>
      <div className="control control-expanded">
        <input className="input" type="email" name="email" placeholder="請留下您的郵箱&hellip;" />
      </div>
      <div className="control">
        <a className="button button-primary button-block button-shadow" href="#">我們將會聯絡您</a>
      </div>
    </div>
  )
}

export default Mailbox