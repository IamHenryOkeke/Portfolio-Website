import { useState } from 'react'
import PropTypes from 'prop-types'
import {ReactComponent as LinkedIn} from "../../assets/svg/LinkedIn.svg";
import {ReactComponent as Github} from "../../assets/svg/Github.svg";
import {ReactComponent as Phone} from "../../assets/svg/Phone.svg";
import {ReactComponent as Twitter} from "../../assets/svg/Twitter.svg";


const ContactCard = ({twitterUrl, phone, portfolioUrl, linkedInUrl, emailAddress}) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
      <div className="py-4 px-10 lg:px-60 rounded-2xl flex flex-col items-center">
        <h1 className='text-3xl text-center md:text-4xl mb-5'>
          Get in touch with me
        </h1>
        <p className='md:text-xl mb-2'>My Socials</p>
        <div className='flex gap-5 mb-5'>
          <a href={twitterUrl} target='_blank' rel="noreferrer">
            <Twitter className="transition-all fill-blue-500 ease-in-out delay-150 hover:scale-125 duration-500"/>
          </a>
          <a href={portfolioUrl} target='_blank' rel="noreferrer">
            <Github className="transition-all fill-white ease-in-out delay-150 hover:scale-125 duration-500"/>
          </a>
          <a href={linkedInUrl} target='_blank' rel="noreferrer">
            <LinkedIn className="h-6 w-6 transition-all ease-in-out delay-150 hover:scale-125 duration-500"/>
          </a>
          <a href={phone}>
            <Phone className="transition-all fill-green-500 ease-in-out delay-150 hover:scale-125 duration-500"/>
          </a>
        </div>
        <div className='flex flex-col items-center gap-3 w-full md:w-[80%]'>
          <h1 className='md:text-xl -mb-3'>Send a mail</h1>
          <label>
            Message Subject:
          </label>
          <input
            placeholder="Message Subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className='border-2 border-black rounded-md p-2 w-full text-gray-900 bg-neutral-1000'
          />

          <label>Your message</label>
          <textarea rows="5" value={message}
            onChange={(e) => setMessage(e.target.value)} className="p-2  border-2 w-full border-black text-gray-900 bg-neutral-1000 resize-none rounded-md" placeholder="Write your message here..."></textarea>
          <a href={`mailto:${emailAddress}?subject=${subject}&body=${message}`}>
            <button className='px-4 py-1 transition-all ease-in-out delay-150 text-black bg-[#dac0be] hover:bg-[#2d251a] hover:text-[#f0e5ea] border rounded-md duration-500'>Click to Send an Email</button>
          </a>
        </div>
      </div>
  )
}

ContactCard.propTypes = {
    twitterUrl: PropTypes.string.isRequired,
    portfolioUrl : PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    linkedInUrl : PropTypes.string.isRequired,
    emailAddress : PropTypes.string.isRequired
}

export default ContactCard
