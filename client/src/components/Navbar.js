import React from 'react'

const Navbar = () => {
  return (
    <div>
        <link rel="stylesheet" href="/styles/nav_style.css"/>
      <nav class="navbar  navbar-expand-lg  sticky-top" style={{backgroundColor: "#425F57 !important"}}>
  <div class="container-fluid">
    
    <a class="navbar-brand py-0 ps-3" href="#">FloréCare</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">

      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link home ps-5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link about ps-5"  href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link blog ps-5" href='#'>Blogs</a>
        </li>
      </ul>
      {/* <form class="d-flex" role="Login"> */}
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button class="btn btn-outline-success" type="Login_btn">Login</button>
      {/* </form> */}
    </div>
  </div>
</nav>
    
    </div>
  )
}

export default Navbar
