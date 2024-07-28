import React from 'react'
import './Service.css'

const Services = () => {
  return (
    <div id='services' className='services'>
       <div className="services-title">
         <h1>My Service</h1>
       </div>

       <div className="service-container">
          <div className='service-format'>
             <h2>01</h2>
             <h1>Web Design</h1>
             <p>I have basic skills  in ui/ux design where I do the unique design that make you website attractive.</p>
          </div>
          <div  className='service-format'>
            <h2>02</h2>
            <h1>Web Development</h1>
            <p>I also develop the websites, i create high Performance website with fast speed.</p>
          </div>
          <div  className='service-format'>
            <h2>03</h2>
            <h1>PHP & SQL</h1>
            <p>I have basic skills on php and sql that used to intract with server .</p>
          </div>
       </div>
    </div>
  )
}

export default Services
