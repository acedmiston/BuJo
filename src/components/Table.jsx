import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { red, orange, yellow, green, blue, purple, pink } from '@mui/material/colors';

const columns = [
    { id: 'tasks', label: 'Tasks', minWidth: 170 },
    { id: 'monday', label: 'M', minWidth: 60, align: 'center' },
    { id: 'tuesday', label: 'Tu', minWidth: 60, align: 'center' },
    { id: 'wednesday', label: 'W', minWidth: 60, align: 'center' },
    { id: 'thursday', label: 'Th', minWidth: 60, align: 'center' },
    { id: 'friday', label: 'F', minWidth: 60, align: 'center' },
    { id: 'saturday', label: 'S', minWidth: 60, align: 'center' },
    { id: 'sunday', label: 'S', minWidth: 60, align: 'center' },
    { id: 'total', label: 'Total', minWidth: 60, align: 'center' },
];

function createData(tasks, monday, tuesday, wednesday, thursday, friday, saturday, sunday, total){
    // const [tableList, setTableList] = React.useState([{list: ""}]);  
    return {tasks, monday, tuesday, wednesday, thursday, friday, saturday, sunday, total};
}
const label = { inputProps: { 'aria-label': 'tasks list'}};

const handleSubmit = e => {
    e.preventDefault();
}

const rows = [
    createData(
        <TextField 
            variant="standard"
            color="warning" 
            focused 
        />, 
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: red[800],
            '&.Mui-checked': {
            color: red[600]
            }
            }}
        />, 
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: orange[800],
            '&.Mui-checked': {
            color: orange[600]
            }
            }}
        />,
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: yellow[800],
            '&.Mui-checked': {
            color: yellow[600]
            }
            }}
        />, 
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: green[800],
            '&.Mui-checked': {
            color: green[600]
            }
            }}
        />,
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: blue[800],
            '&.Mui-checked': {
            color: blue[600]
            }
            }}
        />,
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: purple[800],
            '&.Mui-checked': {
            color: purple[600]
            }
            }}
        />,
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: pink[800],
            '&.Mui-checked': {
            color: pink[600]
            }
            }}
        />),
    createData(
        <TextField 
            variant="standard"
            color="warning" 
            focused 
        />, 
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: red[800],
            '&.Mui-checked': {
            color: red[600]
            }
            }}
        />, 
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: orange[800],
            '&.Mui-checked': {
            color: orange[600]
            }
            }}
        />,
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: yellow[800],
            '&.Mui-checked': {
            color: yellow[600]
            }
            }}
        />, 
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: green[800],
            '&.Mui-checked': {
            color: green[600]
            }
            }}
        />,
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: blue[800],
            '&.Mui-checked': {
            color: blue[600]
            }
            }}
        />,
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: purple[800],
            '&.Mui-checked': {
            color: purple[600]
            }
            }}
        />,
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: pink[800],
            '&.Mui-checked': {
            color: pink[600]
            }
            }}
        />),
    createData(
        <TextField 
            variant="standard"
            color="warning" 
            focused 
        />, 
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: red[800],
            '&.Mui-checked': {
            color: red[600]
            }
            }}
        />, 
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: orange[800],
            '&.Mui-checked': {
            color: orange[600]
            }
            }}
        />,
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: yellow[800],
            '&.Mui-checked': {
            color: yellow[600]
            }
            }}
        />, 
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: green[800],
            '&.Mui-checked': {
            color: green[600]
            }
            }}
        />,
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: blue[800],
            '&.Mui-checked': {
            color: blue[600]
            }
            }}
        />,
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: purple[800],
            '&.Mui-checked': {
            color: purple[600]
            }
            }}
        />,
        <Checkbox 
            {...label} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: pink[800],
            '&.Mui-checked': {
            color: pink[600]
            }
            }}
        />)
];

function StickyHeadTable() {

    return (
        <>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '26ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField color="secondary" focused placeholder="Add a week" InputProps={{ style: { fontSize: 40, color: 'white', textAlign: 'center' }} }/>
        </Box>
        <Paper sx={{ maxWidth: '90%', margin: 'auto', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, fontSize: 40 }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox">
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
        </>
    );
}

export default StickyHeadTable;