import React from 'react'
import './Contact.css'
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "04fe4c5f-e3a9-4f98-9ad3-a4a7ab10b1cc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, fell free to contact me anytime</p>

            <div className='contact-details'>
                <div className="contact-detail">
                    <MdEmail/> <p>vanessaumutoni26@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <BiSolidPhoneCall/> <p>0784 078 380</p>
                </div>
                <div className="contact-detail">
                    <FaLocationDot/> <p>Kigali, Rwanda</p>
                </div>
            </div>
        </div>
        <div >
            <form onSubmit={onSubmit} className="contact-right">
              <label htmlFor="">Your Names</label>
              <input type="text" placeholder='Enter your names' name='name' />
              <label htmlFor="">Your Email</label>
              <input type="email" placeholder='Enter your email' name='email' />
              <label htmlFor="">write your message here</label>
              <textarea name="message" id="" rows={8} placeholder='Enter your messa'></textarea>
              <button typeof='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
