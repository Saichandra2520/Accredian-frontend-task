import { Button } from '@mui/material'
import React from 'react';
import logoWhiteImg from '../images/logo-white.png'

const Footer = () => {
  return (
    <section className="footer">
        <div className="logo">
          <img src={logoWhiteImg}></img>
        </div>
        <div className="schedule-button">
        <Button variant="contained" style = {{ textTransform: 'none', border: 'none'}} href="https://trial.accredian.com/" >Schedule 1-on-1 Call Now</Button>
        </div>
        
      </section>
  )
}

export default Footer