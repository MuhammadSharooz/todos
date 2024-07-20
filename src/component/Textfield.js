import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: .1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={props.value} id="outlined-basic" label="Enter your Task" variant="outlined" onChange={props.inputValue} />
    </Box>
  );
}
