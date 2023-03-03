import OutlinedInput from "@mui/material/OutlinedInput";

export default function FormTextField(props) {
    const {
        name,
        input
    } = props
    return (
        <OutlinedInput sx={{
            height:40,
            width:300,
            borderRadius: 3,
            paddingInlineStart: 2,
            paddingInlineEnd: 5
        }}
            name={input.name}
            onChange={input.onChange}
            value={input.value}
        />
    )
}