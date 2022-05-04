import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button } from '@mui/material';

const columns = [
  { id: 'No', label: 'No', minWidth: 170 },
  { id: 'Company', label: 'Company', minWidth: 100 },
  { id: 'TeamStrength', label: 'Team Strength', minWidth: 170 },
  { id: 'TotalRevenue', label: 'Total Revenue', minWidth: 170 },
  { id: 'Rating', label: 'Rating', minWidth: 170 },
  { id: 'Action', label: 'Action', minWidth: 170 },
  

  
];

function createData(No, Company, TeamStrength, TotalRevenue, Rating, Action) {
  
  return { No, Company, TeamStrength, TotalRevenue, Rating, Action };
}

axios({
  method:"get",
  url:"http://localhost:4000/company/pending",

})
.then((resp)=>{
  console.log(resp.data.pendingCompanies)
}).catch((error)=>{
  console.log(error)
})

const editIcon = (a)=>{ 
  return(
    <>
    <button style={{width:35, height:30,backgroundColor:"blue"}} onClick={(()=>console.log(a))} />
    <button style={{width:35, height:30,backgroundColor:"blue", marginLeft: "10px"}} />
    </>

  )
    };
    

const rows = [
  createData('1', 'Infotech', 4, 10000,5,editIcon(1), editIcon(1)),
  createData('2', 'Soft solutions', 4, 10000,5),
  createData('3', 'Infotech', 4, 10000,5),
  createData('4', 'Infotech', 4, 10000,5),
  createData('5', 'Infotech', 4, 10000,5),


];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
       <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}