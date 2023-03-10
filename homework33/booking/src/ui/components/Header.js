import Stack from '@mui/material/Stack';
import {Button} from "./Button";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import {routes} from "../../engine/config/routers";

const Wrapper = styled(Box)({
    display: 'flex',
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '24px',
    paddingRight: '24px',
    justifyContent: 'space-between',
    boxShadow: '0 20px 16px -16px rgba(0,0,0,0.6)',
    alignItems: 'center',
})
export function Header() {

    return(
        <Wrapper component="header">
            <Box
                component="h1"
                sx={{color: 'primary.main', fontWeight: 'bold'}}
            >Booking</Box>
            <Stack spacing={2} direction="row">
                <Button to={routes.home}>Home</Button>
                <Button to={routes.about}>About</Button>
            </Stack>

        </Wrapper>
    )
}