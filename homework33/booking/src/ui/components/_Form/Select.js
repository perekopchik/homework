import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectMUI from '@mui/material/Select';

export const Select = (props) => {
    const {
        options,
        label,
        input,
        disabled,
    } = props;
    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <SelectMUI
                {...input}
                label={label}
                disabled={disabled}
            >
                {options.map((item) => (<MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>))}
            </SelectMUI>
        </FormControl>
    );
}