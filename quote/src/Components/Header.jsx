import React from 'react'
import {Navbar,Container} from 'react-bootstrap';

function Header() {
  return (
    <div>
     <Navbar className="bg-body-info">
        <Container>
          <Navbar.Brand href="#home" className='text-dark fw-bolder fs-5'>
          <img width = '50px'src="https://cdn-icons-gif.flaticon.com/12756/12756050.gif" alt="" />
          <span></span>QUOTES GENERATOR
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
