import {useState} from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function MonthPicker() {
    const [value, setValue] = useState(new Date());

    return (
        <div>
            <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker
                views={['year', 'month']}        
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params}/>}
                />
            </LocalizationProvider>
        </div>
    );
}

export default MonthPicker;