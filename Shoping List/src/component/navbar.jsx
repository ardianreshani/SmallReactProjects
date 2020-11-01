import React from 'react'

const navBar = (props) => {
  return (
    <div >
      <nav className="navbar navba-light bg-light" >
  <a href="#" className="navbar-brand" style={{ marginLeft: '650px' }}> Shoping List<i class="fas fa-shopping-cart p-3"><span>{props.totalCounters}</span> </i>
  </a>
      </nav>
    </div>
  )
}

export default navBar
