import Box from "@mui/material/Box";
import selectorHotels from "../../engine/core/hotels/selectors";
import {useSelector} from "react-redux";




export function Hotels(){
    const hotelsItems = useSelector(selectorHotels.items);
    return(<>
            <Box component='div'
                 sx={{
                     display: 'flex',
                     flexWrap: 'wrap',
                     gap: '10px',
                     marginTop: '30px',
                     justifyContent: 'center',

                 }}>
                {hotelsItems.map((item) =>
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
                    </Box>
                )}
            </Box>
        </>
    )
}
