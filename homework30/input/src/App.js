import React from "react";
import {Paper} from "@mui/material";
import {Form, Field} from "react-final-form";
import Button from '@mui/material/Button';
import FormTextField from "./components/FormTextField";
import google from "./images/google.png"
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


const onSubmit = (e) => {
    console.log(e.text);
    e.text = undefined;
}
const onValidate = (value) => {
    if (value.text === undefined) {
        console.log('The field is empty')
    }

}

function App() {
    return (
        <Form
            onSubmit={onSubmit}
            validate={onValidate}
            render={(formProps) => {
                const {handleSubmit,dirty} = formProps;
                return (
                    <Paper
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            padding: '20px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: 400,
                            margin: 'auto',
                            flexDirection: 'column',
                            textAlign: 'center'
                        }}
                    >
                        <div>
                            <img style={{
                                width:300,
                                position: 'relative',
                                top: 80
                            }} src={google} alt="google" />
                            <SearchIcon sx={{
                                position:"absolute",
                                top: 340,
                                left: 815
                            }}/>
                            <MicIcon sx={{
                                position:"absolute",
                                top: 340,
                                left: 1055
                            }}/>
                            <CameraAltIcon sx={{
                                position:"absolute",
                                top: 340,
                                left: 1080
                            }}/>
                            <Field
                                component={FormTextField}
                                name="text"
                            />
                            <br/>
                            <Button sx={{
                                margin:3
                            }} variant="contained" type="submit" disabled={dirty===false}>Search google</Button>
                        </div>
                    </Paper>
                )
            }
            }
        />


    );
}

export default App;
