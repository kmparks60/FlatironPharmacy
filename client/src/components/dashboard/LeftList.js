import * as React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import MedicationIcon from '@mui/icons-material/Medication';

function LeftList() {

    function chemicalRoute() {
        window.location.href='/dashboard/chemicals'
    }

    function clientRoute() {
        window.location.href='/dashboard/clients'
    }

    function orderRoute() {
        window.location.href='/dashboard/orders'
    }

    return (
        <Box pt={8} height={'100px'}>
            <ListItemButton onClick={chemicalRoute}>
            <ListItemIcon>
                <MedicationIcon />
            </ListItemIcon>
            <ListItemText primary="Chemicals" />
            </ListItemButton>
            <ListItemButton onClick={clientRoute}>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Clients" />
            </ListItemButton>
            <ListItemButton onClick={orderRoute}>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
            </ListItemButton>
        </Box>
    )    
};

export default LeftList;