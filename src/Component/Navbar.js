import React from 'react'
import "../Component/Navbar.css"

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="#"><i class="fa-solid fa-envelope-open"></i>Estatery</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <button className='btu'><a class="nav-link nevu" href="#">Rent </a></button>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Buy</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sell</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Manage Property
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Resources
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
    <button class="btn btn-outline-primary my-2 mr-sm-2" type="submit">Login</button>

      <button class="btn btn-outline-primary  colorline my-2 my-sm-0" type="submit">Sign up</button>
    </form>
  </div>
</nav>

 <div className='container py-0'>
   <div className='Contain-display  d-flex justify-content-between  py-5'>
    <h3 className='msg  my-2'>Search properties to rent</h3>
    <div><button class="btn btn-outline-gray my-2" type="submit">Search with Search Bar<i class="fa-solid fa-angle-down  down"></i></button></div>

   </div>
 </div>
    </div>
  )
}
