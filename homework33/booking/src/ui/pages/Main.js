import Box from '@mui/material/Box'
import {SearchForm} from "../components/SearchForm";

export function Main() {
    return (
        <div>
            <SearchForm/>
            <Box component="h1" sx={{fontsize: '40px', lineHeight: 1, margin: 0}}>
                Travel With
                <Box component="span" sx={{color: 'primary.main'}}>Booking</Box>
            </Box>
        </div>
    )
}