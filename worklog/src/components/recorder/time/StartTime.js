import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';

export default function StartTime() {
  const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>

        <DesktopTimePicker
          label="Start Time"
          ampm={false}
          clearable
          value={value}
          
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} sx={{width: '150px',bgcolor:'#E2F0DE' }} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

