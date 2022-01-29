import {TableContainer, TableRow} from '@mui/material';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import {observer} from 'mobx-react';
import React, {FunctionComponent} from 'react';
import {dataStore} from '../stores/dataStore';

export const Tablom: FunctionComponent<any> = observer((props) => {
  const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding: 0,
    },
  }));

  const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label='simple table'>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align='center'>
              Fotoğraf&nbsp;
            </StyledTableCell>
            <StyledTableCell align='center'>Marka</StyledTableCell>
            <StyledTableCell align='center'>Seri</StyledTableCell>
            <StyledTableCell align='center'>Model&nbsp;</StyledTableCell>
            <StyledTableCell align='center'>Puan&nbsp;</StyledTableCell>
            <StyledTableCell align='center'>Yıl&nbsp;</StyledTableCell>
            <StyledTableCell align='center'>
              Motor&nbsp;Hacmi (cc)
            </StyledTableCell>
            <StyledTableCell align='center'>Km&nbsp;</StyledTableCell>
            <StyledTableCell align='center'>Renk&nbsp;</StyledTableCell>
            <StyledTableCell align='center'>
              Fiyat&nbsp;(TL)
            </StyledTableCell>
            <StyledTableCell align='center'>İl / İlçe</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {dataStore.filteredData.map((row: any) => (
            <StyledTableRow
              key={row.km}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}>
              <StyledTableCell align='center'>
                <img
                  style={{width: 100, padding: 5}}
                  src={row.imgUrl}
                  alt=''
                />
              </StyledTableCell>
              <StyledTableCell align='center'>{row.marka}</StyledTableCell>
              <StyledTableCell align='center'>{row.seri}</StyledTableCell>
              <StyledTableCell align='center'>{row.model}</StyledTableCell>
              <StyledTableCell align='center'>{row.puan}</StyledTableCell>
              <StyledTableCell align='center'>{row.yıl}</StyledTableCell>
              <StyledTableCell align='center'>
                {row.motorHacmi}
              </StyledTableCell>
              <StyledTableCell align='center'>{row.km}</StyledTableCell>
              <StyledTableCell align='center'>{row.renk}</StyledTableCell>
              <StyledTableCell align='center'>{row.fiyat}</StyledTableCell>
              <StyledTableCell align='center'>
                {`${row.il} / ${row.ilçe}`}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
