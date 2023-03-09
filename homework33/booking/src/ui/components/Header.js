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
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0,2), 0px 4px 5px 0px rgba(0,0,0,0,14), 0px 1px 10px 0px rgba(0,0,0,0,12)',
    alignItems: 'center',
})
export function Header() {

    return(
        <Wrapper component="header">
            Header
            <Stack spacing={2} direction="row">
                <Button to={routes.home}>Home</Button>
                <Button to={routes.about}>About</Button>
            </Stack>

        </Wrapper>
    )
}