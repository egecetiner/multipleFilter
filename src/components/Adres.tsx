import {Autocomplete, Checkbox, TextField} from '@mui/material';
import {observer} from 'mobx-react';
import React, {FunctionComponent} from 'react';
import iller from '../data/iller';
import {dataStore} from '../stores/dataStore';

export const Adres: FunctionComponent<any> = observer((props) => {
  const onClick = (row: any) => {
    console.log(row);
    if (dataStore.il.some((item: any) => item === row)) {
      dataStore.setIl(dataStore.il.filter((item: any) => item !== row));
    } else {
      dataStore.setIl([...dataStore.il, row]);
    }
  };
  console.log(dataStore.il);
  return (
    <div
      style={{
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 5,
      }}>
      <div
        style={{
          textAlign: 'center',
          padding: 17,
          fontSize: 14,
          borderRadius: 5,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          backgroundColor: 'black',
          color: 'white',
        }}>
        Adres
      </div>
      <div
        style={{
          padding: 10,
        }}>
        <Autocomplete
          multiple
          id='checkboxes-tags-demo'
          options={iller}
          disableCloseOnSelect
          onChange={(event) => {
            onClick(event.currentTarget.textContent);
          }}
          getOptionLabel={(option) => option.il}
          renderOption={(props, option, {selected}) => (
            <li {...props}>
              <Checkbox style={{marginRight: 8}} checked={selected} />
              {option.il}
            </li>
          )}
          style={{backgroundColor: 'lightgrey'}}
          renderInput={(params) => (
            <TextField {...params} label='İl' placeholder='İl Seç' />
          )}
        />
      </div>
    </div>
  );
});
