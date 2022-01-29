import SearchIcon from '@mui/icons-material/Search';
import {observer} from 'mobx-react';
import React, {FunctionComponent} from 'react';
import rows from '../data/data';
import {dataStore} from '../stores/dataStore';

export const NavigatonBar: FunctionComponent<any> = observer(() => {
  return (
    <nav className='navbar bg-dark navbar-expand-sm navbar-dark sticky-top mt-0 justify-content-around'>
      <form className='d-flex justify-content-center align-items-center  '>
        <SearchIcon sx={{color: 'white'}}></SearchIcon>
        <input
          className='pt-1 px-2 mx-2 '
          value={dataStore.searchValue}
          onChange={(event: any) =>
            dataStore.setSearchValue(event.target.value)
          }
          placeholder='Anahtar kelime ekle'
        />

        <button
          type='button'
          className='btn btn-light btn-sm p-2 '
          onClick={() => {
            const filteredData = rows.filter(
              (item) =>
                item.marka
                  .toLowerCase()
                  .includes(dataStore.searchValue.toLowerCase()) ||
                item.seri
                  .toLowerCase()
                  .includes(dataStore.searchValue.toLowerCase()) ||
                item.model
                  .toLowerCase()
                  .includes(dataStore.searchValue.toLowerCase()),
            );

            dataStore.setFilteredDataKey(filteredData);
            dataStore.setFilteredData(filteredData);
          }}>
          Ara
        </button>
        <button
          type='button'
          className='btn btn-light btn-sm p-2 mx-2 '
          onClick={() => {
            dataStore.setFilteredDataKey(rows);
            dataStore.setFilteredData(rows);
            dataStore.setSearchValue('');
          }}>
          Filtreleri Temizle
        </button>
      </form>
    </nav>
  );
});
