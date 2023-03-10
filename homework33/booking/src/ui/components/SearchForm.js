import {useEffect} from 'react';
import {Field, Form} from 'react-final-form';
import {useDispatch, useSelector} from 'react-redux';
// Parts
import Box from '@mui/material/Box';
import {Grid} from '@mui/material';
import {DataPicker} from './_Form/DataPicker';
import {TextField} from './_Form/TextField';
import {Select} from './_Form/Select';
import {Button} from './Button';
// Engine
import {getDestinationAsync} from '../../engine/core/destination/saga/asyncActions';
import {getHotelsAsync} from '../../engine/core/hotels/saga/asyncActions';
import selectorsDestination from '../../engine/core/destination/selectors';

export const SearchForm = () => {
    const dispatch = useDispatch();
    const destinationItems = useSelector(selectorsDestination.items);
    const destinationLoading = useSelector(selectorsDestination.loading);
    const onSubmit = (values) => {
        dispatch(getHotelsAsync(values));
    };
    useEffect(() => {
        dispatch(getDestinationAsync());
    }, []);

    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) => {
                return (
                    <Box
                        component='form'
                        sx={{margin: '30px 0'}}
                        onSubmit={handleSubmit}
                    >
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                alignItems: 'center'
                            }}
                        >
                            <Grid item xs={2}>
                                <Field
                                    disabled={destinationLoading}
                                    name='destination'
                                    label='Destination'
                                    options={destinationItems}
                                    component={Select}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Field
                                    name='Check in'
                                    label='Check in'
                                    component={DataPicker}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Field
                                    name='Check out'
                                    label='Check out'
                                    component={DataPicker}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Field name='Number of children' label='Number of children' component={TextField}/>
                            </Grid>
                            <Grid item xs={1}>
                                <Button type='submit'>Send</Button>
                            </Grid>
                        </Grid>
                    </Box>
                );
            }}
        />
    );
}