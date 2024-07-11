import React from 'react';
import referProcessImg from '../images/refer-process.png';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Button } from '@mui/material';

const ReferProcessCard = ({handleOpen}) => {
  return (
    <section className="refer-process-card">
          <div className="refer-process-text">
            <h2>How Do I <span style={{ color:'#1A73E8', fontWeight:'500'}} >Refer?</span></h2>
          </div>
          <div className="refer-process-img">
              <div className="img-container"><img src={referProcessImg} /></div>
              <div className="refer-stage-1">
                  <PersonAddIcon sx={{ color: '#1A73E8', fontSize:'4rem' }} />
                  <p>Submit referrals easily via our website's referral section.</p>
              </div>
              <div className="refer-stage-2">
                  <ChecklistIcon sx={{ color: '#1A73E8', fontSize:'4rem' }} />
                  <p>Earn rewards once your referral joins an Accredian program.</p>
              </div>
              <div className="refer-stage-3">
                  <AccountBalanceWalletIcon sx={{ color: '#1A73E8', fontSize:'4rem' }} />
                  <p>Both parties receive a bonus 30 days after program enrollment.</p>
              </div>
          </div>
          <div>
              <Button variant="contained" style = {{ textTransform: 'none', border: 'none'}} onClick={handleOpen} >Refer Now</Button>
          </div>
      </section>
  )
}

export default ReferProcessCard