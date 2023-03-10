import Box from "@mui/material/Box";
import selectorHotels from "../../engine/core/hotels/selectors";
import {useSelector} from "react-redux";


export function Hotels() {
    const hotelsItems = useSelector(selectorHotels.items);
    return (<>
            <Box component="h1">Hotels</Box>
            <Box component='div'
                 sx={{
                     display: 'flex',
                     flexWrap: 'wrap-reverse',
                     gap: '10px',
                     marginTop: '30px',
                     justifyContent: 'center',

                 }}>
                {hotelsItems.length > 0 ? (
                    hotelsItems.map((item) => {
                        return (
                            <Box
                                component={'div'}
                                key={item.id}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '600px',
                                    border: '1px solid black',
                                    gap: '10px',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}>
                                <Box
                                    component={'h1'}
                                    sx={{fontSize: '24px'}}>
                                    Hotel Name: <Box
                                    component={'span'}
                                    sx={{color: 'primary.main'}}
                                >
                                    {item.name}
                                </Box>
                                </Box>
                                <Box component={'h3'}>
                                    Address: <Box
                                    component={'span'}
                                    sx={{color: 'primary.main'}}
                                >
                                    {item.address}
                                </Box>
                                </Box>
                                <Box
                                    component={'span'}
                                    sx={{
                                        color: 'black',
                                        fontWeight: "bold",
                                        fontSize: '16px'
                                    }}
                                >
                                    {item.phone_number}
                                </Box>
                                <Box component={'p'}> Rating of hotel: <Box
                                    component={'span'}
                                    sx={{
                                        color: 'primary.main',
                                        fontWeight: "bold",
                                        fontSize: '16px'
                                    }}
                                >
                                    {item.hotel_rating}
                                </Box> Stars</Box>
                            </Box>

                        );
                    })
                )
                    : (
                    <h2>Unfortunately there are no available hotels.</h2>
                )}
            </Box>
        </>
    )
}
