import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styledComp from 'styled-components';
import Modal from './Modal';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, date, action) {
  return { name, date, action };
}

const ButtonOptionSty = styledComp.button`
    background-color: #05C194;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: 600;
`

export default function CustomizedTables() {
    const [open, setOpen] = React.useState(false);

    const ButtonOption = () => {
        return (
            <ButtonOptionSty onClick={() => setOpen(!open)} >OPÇÕES</ButtonOptionSty>
        );
    }

    const rows = [
        createData('José Pereira', '12/12/2022', <ButtonOption />),
        createData('Francisca Giovana Renata', '12/12/2022', <ButtonOption />),
    ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, marginTop: 5 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="right">Data</StyledTableCell>
            <StyledTableCell align="right">Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Modal open={open} setOpen={setOpen} />
    </TableContainer>
  );
}