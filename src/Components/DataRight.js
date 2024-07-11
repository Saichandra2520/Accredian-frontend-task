import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BulletImg from '../images/bulletpoint.png'

function createData(d1, d2,d3) {
  return { d1, d2,d3 };
}

const rows = [
  createData('Professional Certificate Program in Product Management', 7000, 9000),
  createData('PG Certificate Program in Strategic Product Management', 9000, 11000),
  createData('EclaExecutive Program in Data Driven Product Managementir', 10000, 11000),
  createData('Executive Program in Product Management and Digital Transformation', 10000, 10000),
  createData('Executive Program in Product Management', 10000, 10000),
  createData('Advanced Certification in Product Management', 10000, 10000),
  createData('Executive Program in Product Management and Project Management', 10000, 10000)
];

export default function DataRight() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor:'#1a73e859', color: '#1350A0', fontWeight: '500' }}>
            <TableCell >Programs</TableCell>
            <TableCell align="right">Referrer Bonus</TableCell>
            <TableCell align="right">Referee Bonus</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody sx={{ bgcolor:'#ebf3ff59' }}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" > 
               <img src={BulletImg} ></img> {row.d1}
              </TableCell>
              <TableCell align="right"> &#8377; {row.d2}</TableCell>
              <TableCell align="right">&#8377; {row.d3}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
