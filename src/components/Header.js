import React from 'react'
import './header.css'
const Header = (props) => {
  return (
    <div>
         <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand" >TeeRex Store</div>
                    <div><a className='navbar-brand' href="/" onClick={()=>props.handleShow(false)}>Products</a></div>
                    <button onClick={()=>props.handleShow(true)}>
                        Cart <sup>{props.count}</sup>
                    </button>


             

             
                </div>
            </nav>
    </div>
  )
}

export default Header
