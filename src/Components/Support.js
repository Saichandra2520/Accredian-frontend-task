import { Button } from '@mui/material'
import React from 'react';
import headsetImg from '../images/headset.png';

const Support = () => {
  return (
    <section className="support">
        <div className="wrapper">
        <div className="headset-img">
            <img src={headsetImg} ></img>
          </div>
          <div className="support-text">
            <h4>Want to delve deeper into the program?</h4>
            <p>Share your details to receive expert insights from our program team!</p>
          </div>
          <div>
        
            <Button variant="contained" style = {{ textTransform: 'none', border: 'none', color : '#1A73E8', backgroundColor :'white' }} href="https://trial.accredian.com/" >Get in Touch  </Button>
          </div>
        </div>
      </section>
  )
}

export default Support