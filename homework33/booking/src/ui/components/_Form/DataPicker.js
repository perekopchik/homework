import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker as DatePickerMui} from '@mui/x-date-pickers/DatePicker';

export const DataPicker = (props) => {
    const {label, input} = props;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePickerMui
                label={label}
                inputFormat="MM/DD/YY"
                {...input}
                value={input.value || null}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}