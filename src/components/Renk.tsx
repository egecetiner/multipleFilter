import {Checkbox, TableContainer, TableRow} from '@mui/material';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import {observer} from 'mobx-react';
import React, {FunctionComponent} from 'react';
import rows from '../data/data';
import {dataStore} from '../stores/dataStore';

export const Renk: FunctionComponent<any> = observer((props) => {
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

  const onClick = (row: any) => {
    if (dataStore.renk.some((item: any) => item === row)) {
      dataStore.setRenk(
        dataStore.renk.filter((item: any) => item !== row),
      );
    } else {
      dataStore.setRenk([...dataStore.renk, row]);
    }
  };

  const renkler = rows.map((o) => o.renk);

  const renkDuplicateFilter = rows.filter(
    ({renk}, index) => !renkler.includes(renk, index + 1),
  );
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align='center'>Renk</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {renkDuplicateFilter.map((row) => (
            <StyledTableRow
              key={row.km}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}>
              <StyledTableCell>
                <Checkbox
                  checked={dataStore.renk.some(
                    (item: any) => item === row.renk,
                  )}
                  onChange={() => {
                    onClick(row.renk);
                  }}
                  inputProps={{'aria-label': 'controlled'}}
                />
                {row.renk}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
