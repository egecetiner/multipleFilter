import {observer} from 'mobx-react';
import React, {FunctionComponent} from 'react';
import {dataStore} from '../stores/dataStore';

export const MinMaxFiyat: FunctionComponent<any> = observer(() => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 5,
        marginBottom: 20,
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
        Fiyat (TL)
      </div>
      <div
        style={{
          padding: 10,
        }}>
        <input
          style={{width: 80, marginLeft: 15}}
          type='text'
          placeholder='Min'
          value={dataStore.fiyatMin}
          onChange={(event: any) =>
            dataStore.setFiyatMin(event.target.value)
          }
        />{' '}
        -{' '}
        <input
          style={{width: 80}}
          type='text'
          placeholder='Maks'
          value={dataStore.fiyatMaks}
          onChange={(event: any) =>
            dataStore.setFiyatMaks(event.target.value)
          }
        />
      </div>
    </div>
  );
});
