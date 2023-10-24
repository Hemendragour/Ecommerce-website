import React from 'react'
import { Link } from 'react-router-dom'


const Footers = () => {
  return (
    <div className='footer'>

<h1 className='text-center'> All right Reserved footers</h1>

       <p className='text-center mt-3'>
         <Link to ='/about' >About</Link>
         <Link to ='/Contact' >Contact</Link>
         <Link to ='/policy' >Privacy policy</Link>

        </p> 
        
     </div>
  )
};

export default Footers