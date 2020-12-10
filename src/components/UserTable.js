import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


export default function BasicTable() {
    const [isLoading, setIsLoading] = useState(true);
    const [associateData, setAssociateData] = useState([]);
  
    useEffect(() => {
      axios.get('http://23.100.226.87:3001/associates').then(res => {
        setAssociateData(res.data);
        setIsLoading(false);
      });
    }, [])
    
    const classes = useStyles();


    return (
        <>
            {isLoading && <div className={classes.root}>
                <CircularProgress />
            </div>}
            {!isLoading && <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Associate</TableCell>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Division&nbsp;(g)</TableCell>
                            <TableCell align="right">Team&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {associateData.map((associate) => (
                            <TableRow key={associate.id}>
                                <TableCell component="th" scope="row">
                                    {associate.name}
                                </TableCell>
                                <TableCell align="right">{associate.id}</TableCell>
                                <TableCell align="right">{associate.division}</TableCell>
                                <TableCell align="right">{associate.team}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            }

        </>
    );
}
