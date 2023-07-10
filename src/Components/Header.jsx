import React from 'react'
import{Container, Navbar} from "react-bootstrap"
import { Link } from 'react-router-dom'

const Headers = () => {
  return ( 
        <Navbar className='bg-body-tertiary' bg='dark'
        data-bs-theme='dark'>
        <Container>
            <Link to='/'>
            <Navbar.Brand>Дома</Navbar.Brand>
            </Link> 
            <Link to='/add'>
            <Navbar.Brand>Скиллы</Navbar.Brand>
            </Link> 
            <Link to='/about'>
            <Navbar.Brand>О себе</Navbar.Brand>
            </Link> 
        </Container>
        </Navbar>
  )
}

export default Headers