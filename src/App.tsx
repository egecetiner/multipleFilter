import {Grid} from '@mui/material';
import {observer} from 'mobx-react';
import React from 'react';
import {Adres} from './components/Adres';
import {Marka} from './components/Marka';
import {MinMaxFiyat} from './components/minMaxFiyat';
import {MinMaxKm} from './components/minMaxKm';
import {MinMaxMH} from './components/minMaxMH';
import {MinMaxPuan} from './components/minMaxPuan';
import {MinMaxYıl} from './components/minMaxYıl';
import {NavigatonBar} from './components/navBar';
import {Renk} from './components/Renk';
import {Tablom} from './components/Tablom';
import {ara} from './utils';

const App = observer(() => {
  return (
    <div
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <NavigatonBar />
      <Grid sx={{justifyContent: 'center'}} container spacing={2}>
        <Grid
          style={{
            backgroundColor: '#c9c9c4',
            justifyContent: 'center',
            justifyItems: 'center',
            paddingLeft: 30,
            paddingTop: 20,
            paddingRight: 20,
          }}
          item
          sm={12}
          md={4}
          lg={2}>
          <Marka></Marka>
          <Renk></Renk>
          <Adres></Adres>

          <MinMaxFiyat></MinMaxFiyat>
          <MinMaxKm></MinMaxKm>
          <MinMaxMH></MinMaxMH>
          <MinMaxPuan></MinMaxPuan>
          <MinMaxYıl></MinMaxYıl>

          <button
            type='button'
            className='btn btn-light btn-md w-100 mb-3'
            onClick={() => {
              ara();
            }}>
            Ara
          </button>
        </Grid>
        <Grid
          style={{
            backgroundColor: '#f0f0f0',
            justifyContent: 'center',
            justifyItems: 'center',
            padding: 20,
          }}
          item
          id='element_target'
          sm={12}
          md={8}
          lg={10}>
          <Tablom></Tablom>
        </Grid>
      </Grid>
    </div>
  );
});

export default App;
