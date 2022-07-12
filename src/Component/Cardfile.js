import React from 'react'
import "../Component/Cardfile.css"

export default function Cardfile() {
  return (
    <div>
      <div className='container'>
        <div class="row clr py-5">
          <div className='col-md-3 col-sm-12 col-xs-12 right'><small class="text-muted text-start">Location</small><br /><span className='co'>New York, USA</span></div>
          <div className='col-md-3 col-sm-12 col-xs-12 right'><small class="text-muted">When</small><br /><span className='co'>Select Movie-in Date</span></div>
             <div className='col-md-2 col-sm-12 col-xs-12 right'><small class="text-muted">Price</small><br /><span className='co'>$500-$2,500</span></div>
          <div className='col-md-2 col-sm-12 col-xs-12 right'><small class="text-muted">Property Type</small><br /><span className='co'>Houses</span></div>
          <button class="btn btn-outline-primary my-2 ml-sm-2 login-btn-css text-center" type="Search">Search</button>
        </div>
      </div>


    </div>
  )
}
