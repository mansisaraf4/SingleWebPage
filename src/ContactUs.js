import ContactItem from './ContactItem'
import palmDesert from './images/palm-desert.jpg'
import sanLeandro from './images/san-leandro.jpg'
import bend from './images/bend.jpg'
import {useState} from 'react'

const ContactUs = () => {
  const palmAddress = ['74-824 42nd Avenue' , 'Palm Desert CA 92260', '(760) 773-1001']
  const sanAddress = ['1991 Fairway Drive','San Leandro, CA 94577','(510) 351-3000']
  const bendAddress = ['50 SE Scott St #8', 'Bend, OR 97702', '(541) 706-9990']

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Form successfully submitted for ${name} for email address ${email} with subject ${subject}`)
  }

  return(
    <div className='contact-us-container' id='contact-us'>
      <div className='contact-us-1'>
        <h2>Contact Us</h2>
        <h1>READY TO START YOUR NEXT PROJECT? CONTACT US TODAY</h1>
        <div className='contact-det-container'>
          <ContactItem imgUrl={palmDesert} title={'Palm Desert Showroom'} address={palmAddress} />
          <ContactItem imgUrl={sanLeandro} title={'San Leandro Showroom'} address={sanAddress} />
          <ContactItem imgUrl={bend} title={'Bend Showroom'} address={bendAddress} />
        </div>
      </div>
      <div className='contact-us-1'>
        <h3>Contact Us Online Now</h3>
        <form className='contact-form' onSubmit={handleSubmit}>
          <label>Your Name (required) <br />
            <span>
              <input type='text' className='input-text' value={name} onChange={e => setName(e.target.value)}/>
              <hr />
            </span>
          </label>
          <label>Your Email (required) <br />
            <span>
              <input type='text' className='input-text' value={email} onChange={e => setEmail(e.target.value)}/>
              <hr />
            </span>
          </label>
          <label>Subject <br />
            <span>
              <input type='text' className='input-text' value={subject} onChange={e => setSubject(e.target.value)}/>
              <hr />
            </span>
          </label>
          <label>Your Message <br />
            <span>
              <textarea type='text' rows='5' className='input-text' value={message} onChange={e => setMessage(e.target.value)}/>
              <hr />
            </span>
          </label>
          <button className='btn-send'>SEND</button>
        </form>
      </div>
    </div>
  )
}
export default ContactUs