import React from 'react';
import DataLeft from "./DataLeft";
import DataRight from "./DataRight";
import { Button } from '@mui/material';

const ReferBenefits = ({handleOpen}) => {
  return (
    <section className="refer-benefits">
    <div className="refer-benefits-text">
      <h2>What are The <span style={{ color:'#1A73E8', fontWeight:'500'}} >Referal Benefits?</span></h2>
    </div>
    <div className="data">
      <div className="data-left">
          <DataLeft />
      </div>
      <div className="data-right">
          <DataRight />
      </div>
    </div>
    <div>
        <Button variant="contained" style = {{ textTransform: 'none', border: 'none'}} onClick={handleOpen} >Refer Now</Button>
    </div>
</section>
  )
}

export default ReferBenefits