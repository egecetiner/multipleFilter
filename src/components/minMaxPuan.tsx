import {observer} from 'mobx-react';
import React, {FunctionComponent} from 'react';
import {dataStore} from '../stores/dataStore';

export const MinMaxPuan: FunctionComponent<any> = observer(() => {
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
        Puan
      </div>
      <div
        style={{
          padding: 10,
        }}>
        <input
          style={{width: 80, marginLeft: 15}}
          type='text'
          placeholder='Min'
          value={dataStore.puanMin}
          onChange={(event: any) =>
            dataStore.setPuanMin(event.target.value)
          }
        />{' '}
        -{' '}
        <input
          style={{width: 80}}
          type='text'
          placeholder='Maks'
          value={dataStore.puanMaks}
          onChange={(event: any) =>
            dataStore.setPuanMaks(event.target.value)
          }
        />
      </div>
    </div>
  );
});
