import TextFieldMui from '@mui/material/TextField';

export function TextField(props) {
    const {
        margin,
        label,
        input,
        meta,
    } = props;

    return (
        <TextFieldMui
            {...input}
            margin={margin}
            error={Boolean(meta.error && meta.touched)}
            label={label}
            helperText={meta.error && meta.touched ? meta.error : null}
        />
    )
}