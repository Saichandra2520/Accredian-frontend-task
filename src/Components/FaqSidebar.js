import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FaqSidebar() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="medium" sx={{ width:'150px' ,boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} >
          <Typography sx={{fontSize:'12px', textTransform:'none'}} >Eligibility </Typography>
        </Button>
      </div>
      <div> 
        <Button size="medium" sx={{ width:'150px' ,border:'1px solid black', color:'#737373' }}>
        <Typography sx={{fontSize:'12px', textTransform:'none'}} >How To Use? </Typography>
        </Button>
      </div>
      <div>
        <Button size="medium" sx={{ width:'150px' ,border:'1px solid black', color:'#737373' }} >
        <Typography sx={{fontSize:'12px', textTransform:'none'}} >Terms & Conditions </Typography>
        </Button>
      </div>
    </Box>
  );
}
