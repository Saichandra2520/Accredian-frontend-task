import { Button } from '@mui/material'
import React from 'react';
import referImg from '../images/refer.png'

const ReferCardSection = ({handleClose, handleOpen, open}) => {
  return (
    <section className="refer-card">
        <div className="refer-text">
            <h1>Let's Learn & Earn</h1>
            <p>Get a chance to win 
            up-to <span style={{ color:'#1A73E8', fontWeight:'600'}} >Rs. 15,000</span></p>
            <Button variant="contained" style = {{ textTransform: 'none', border: 'none',backgroundColor: '#1A73E8', padding: '.5rem', width:'9rem' }} onClick={handleOpen} >Refer Now</Button>
        </div>
        <div className="refer-img">
          <img src={referImg} ></img>
        </div>
        
      </section>
  )
}

export default ReferCardSection