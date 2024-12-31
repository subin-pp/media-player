import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-100 container mt-5' style={{height:'300px'}} >
      <div className='d-flex justify-content-between'>
        {/* intro */}
        <div style={{width:'300px'}}>
          <h5>
          <i className="fa-solid fa-music me-3"></i>
          Media Player
          </h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        
        </div>
        {/* Links */}
        <div className='d-flex flex-column'>
        <h5>Links</h5>
        <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none', color:'white'}}>Watch history</Link>

        </div>
        {/* guides */}
        <div className='d-flex flex-column'>
          <h5>Guids</h5>
          <a target='_blank' style={{textDecoration:'none' , color:'white'}} href="">React</a>
          <a target='_blank' style={{textDecoration:'none' , color:'white'}} href="">React Bootstrap</a>
          <a target='_blank' style={{textDecoration:'none' , color:'white'}} href="">react Route</a>

        </div>
        {/* contact */}
        <div className='d-flex flex-column'>
          <h5 >Contact</h5>
          <div className='d-flex' >
            <input className='form-control' type="text" placeholder='Enter your Email' />
           <button className='btn btn-control ms-3 bg-info'> <i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div  className='d-flex mt-3'  >
            <a  target='_blank' className='me-5 '  href=""> <i style={{color:'white' , fontSize:'25px'}} class="fa-brands fa-instagram"></i></a>
            <a target='_blank' className='me-5' href=""><i style={{color:'white',fontSize:'25px'}} class="fa-brands fa-twitter"></i></a>
            <a target='_blank' className='me-5' href=""><i style={{color:'white',fontSize:'25px'}} class="fa-brands fa-facebook"></i></a>
            <a target='_blank' className='me-5' href=""><i style={{color:'white',fontSize:'25px'}} class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer