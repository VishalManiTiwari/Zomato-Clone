import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav className='navbar bg-light fixed-top' 
      style={{boxShadow: "0px 2px 4px rgba(0,0,0,0.1)"}}
      >
        <img src="https://tse4.mm.bing.net/th?id=OIP.ueHppfRf52CDn841Rpj8IwHaHa&pid=Api&P=0&h=180"
         alt="logo"
         className='mx-2'
         width={60}
         height={60} 
         
         />
        <ul className='navbar-nav d-flex flex-row justify-content-between'>
        <li className='nav-item mx-4'>Home</li>    
        <li className='nav-item mx-4'>About</li>
        <li className='nav-item mx-4'>Contact</li>
        <li className='nav-item mx-4'>Cart</li>
        </ul>
      </nav>
    )
  }
}
