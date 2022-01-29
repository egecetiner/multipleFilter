import {dataStore} from '../stores/dataStore';

export const ara = () => {
  const filterRenk: any = dataStore.filteredDataKey.filter((item: any) =>
    dataStore.renk.some((x: any) => x === item.renk),
  );
  const filterSeri: any = dataStore.filteredDataKey.filter((item: any) =>
    dataStore.seri.some((x: any) => x === item.seri),
  );
  const filterIl: any = dataStore.filteredDataKey.filter((item: any) =>
    dataStore.il.some((x: any) => x === item.il),
  );
  const filterFiyat: any = dataStore.filteredDataKey.filter(
    (item: any) =>
      dataStore.fiyatMin < item.fiyat && dataStore.fiyatMaks > item.fiyat,
  );
  const filterYıl: any = dataStore.filteredDataKey.filter(
    (item: any) =>
      dataStore.yılMin < item.yıl && dataStore.yılMaks > item.yıl,
  );
  const filterMh: any = dataStore.filteredDataKey.filter(
    (item: any) =>
      dataStore.mhMin < item.motorHacmi &&
      dataStore.mhMaks > item.motorHacmi,
  );
  const filterPuan: any = dataStore.filteredDataKey.filter(
    (item: any) =>
      dataStore.puanMin < item.puan && dataStore.puanMaks > item.puan,
  );
  const filterKm: any = dataStore.filteredDataKey.filter(
    (item: any) => dataStore.kmMin < item.km && dataStore.kmMaks > item.km,
  );

  const filteredArray = dataStore.filteredDataKey.filter(
    (value: any) =>
      filterRenk.includes(value) &&
      filterSeri.includes(value) &&
      filterIl.includes(value) &&
      filterFiyat.includes(value) &&
      filterYıl.includes(value) &&
      filterMh.includes(value) &&
      filterPuan.includes(value) &&
      filterKm.includes(value),
  );

  dataStore.setFilteredData(filteredArray);
};
