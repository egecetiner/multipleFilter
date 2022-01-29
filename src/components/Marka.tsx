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

export const Marka: FunctionComponent<any> = observer(() => {
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
    if (dataStore.seri.some((item: any) => item === row)) {
      dataStore.setSeri(
        dataStore.seri.filter((item: any) => item !== row),
      );
    } else {
      dataStore.setSeri([...dataStore.seri, row]);
    }
  };

  const markalar = rows.map((o) => o.marka);
  const seriler = rows.map((o) => o.seri);

  const markaDuplicateFilter = rows.filter(
    ({marka}, index) => !markalar.includes(marka, index + 1),
  );
  const seriDuplicateFilter = rows.filter(
    ({seri}, index) => !seriler.includes(seri, index + 1),
  );

  return (
    <TableContainer sx={{marginBottom: 3}} component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align='center'>Marka / Seri</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {markaDuplicateFilter.map((row) => (
            <StyledTableRow
              key={row.km}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}>
              <StyledTableCell style={{paddingTop: 10}} align='center'>
                {row.marka}
                {seriDuplicateFilter.map((x) =>
                  x.marka === row.marka ? (
                    <StyledTableCell key={x.km}>
                      <Checkbox
                        checked={dataStore.seri.some(
                          (item: any) => item === x.seri,
                        )}
                        onChange={() => {
                          onClick(x.seri);
                        }}
                        inputProps={{'aria-label': 'controlled'}}
                      />
                      {x.seri}
                    </StyledTableCell>
                  ) : null,
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
