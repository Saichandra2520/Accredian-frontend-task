import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { within } from '../../node_modules/@popperjs/core/lib/utils/within';

export default function ToggleSections() {
  const [alignment, setAlignment] = React.useState('refer');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="refer" key="refer" style = {{ textTransform: 'none', border: 'none',backgroundColor: '#1a73e81c', padding: '.5rem 3rem'}} >
      <p>Refer & Earn</p>
    </ToggleButton>,
    <ToggleButton value="benefits" key="benefits" style = {{ textTransform: 'none',border: 'none', backgroundColor: '#1a73e81c',padding: '.5rem 3rem'}}>
    <p>Benefits</p>
  </ToggleButton>,
  <ToggleButton value="faqs" key="faqs" style = {{ textTransform: 'none',border: 'none', backgroundColor : '#1a73e81c',padding: '.5rem 3rem'}}>
      <p>FAQs</p>
    </ToggleButton>,
    <ToggleButton value="support" key="support" style = {{ textTransform: 'none',border: 'none', backgroundColor : '#1a73e81c',padding: '.5rem 3rem'}}>
      <p>Support</p>
    </ToggleButton>
  ];

  const control = {
    
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Stack spacing={2} alignItems="center" >
      <ToggleButtonGroup {...control} style={{width: '70%', justifyContent:'center'}} color="primary" aria-label="Medium sizes"  >
        {children}
      </ToggleButtonGroup>
    </Stack>
  );
}
