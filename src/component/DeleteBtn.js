import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export default function IconButtons(props) {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton onClick={props.Delete} aria-label="delete">
        <DeleteIcon   />
      </IconButton>
    </Stack>
  );
}

