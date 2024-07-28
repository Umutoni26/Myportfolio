import React from 'react'
import './Mywork.css'
import Berwa1 from '../../assets/Berwa1.png'
import tindog from '../../assets/tindog.png'
import educa from '../../assets/educa.png'


const Mywork = () => {
  return (
    <div className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>
      <div id='work' className="mywork-container">
         <div>
           <img src={Berwa1} alt="" />
           <img src={tindog} alt="" />
           <img src={educa} alt="" />
           <img src={Berwa1} alt="" />
           <img src={tindog} alt="" />
           <img src={educa} alt="" />
         </div>
      </div>
    </div>
  )
}

export default Mywork
