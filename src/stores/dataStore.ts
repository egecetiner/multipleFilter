import {action, makeObservable, observable} from 'mobx';
import rows from '../data/data';

class DataStore {
  filteredData = <any>rows;
  filteredDataKey = <any>rows;
  searchValue: string = '';
  renk = <any>[];
  seri = <any>[];
  il = <any>[];
  fiyatMin: string = ' ';
  fiyatMaks: string = ' ';

  kmMin: string = ' ';
  kmMaks: string = ' ';

  puanMin: string = ' ';
  puanMaks: string = ' ';

  yılMin: string = ' ';
  yılMaks: string = ' ';

  mhMin: string = ' ';
  mhMaks: string = ' ';

  constructor() {
    makeObservable(this, {
      filteredData: observable,
      setFilteredData: action,
      filteredDataKey: observable,
      setFilteredDataKey: action,
      searchValue: observable,
      setSearchValue: action,
      renk: observable,
      setRenk: action,
      seri: observable,
      setSeri: action,
      il: observable,
      setIl: action,
      fiyatMin: observable,
      setFiyatMin: action,
      fiyatMaks: observable,
      setFiyatMaks: action,

      kmMin: observable,
      setKmMin: action,
      kmMaks: observable,
      setKmMaks: action,

      puanMin: observable,
      setPuanMin: action,
      puanMaks: observable,
      setPuanMaks: action,

      yılMin: observable,
      setYılMin: action,
      yılMaks: observable,
      setYılMaks: action,

      mhMin: observable,
      setMhMin: action,
      mhMaks: observable,
      setMhMaks: action,
    });
  }

  setFilteredData(newValue: any) {
    this.filteredData = newValue;
  }
  setFilteredDataKey(newValue: any) {
    this.filteredDataKey = newValue;
  }
  setSearchValue(newValue: any) {
    this.searchValue = newValue;
  }
  setRenk(newValue: any) {
    this.renk = newValue;
  }
  setSeri(newValue: any) {
    this.seri = newValue;
  }
  setIl(newValue: any) {
    this.il = newValue;
  }
  setFiyatMin(newValue: any) {
    this.fiyatMin = newValue;
  }
  setFiyatMaks(newValue: any) {
    this.fiyatMaks = newValue;
  }

  setKmMin(newValue: any) {
    this.kmMin = newValue;
  }
  setKmMaks(newValue: any) {
    this.kmMaks = newValue;
  }

  setPuanMin(newValue: any) {
    this.puanMin = newValue;
  }
  setPuanMaks(newValue: any) {
    this.puanMaks = newValue;
  }

  setYılMin(newValue: any) {
    this.yılMin = newValue;
  }
  setYılMaks(newValue: any) {
    this.yılMaks = newValue;
  }

  setMhMin(newValue: any) {
    this.mhMin = newValue;
  }
  setMhMaks(newValue: any) {
    this.mhMaks = newValue;
  }
}

export const dataStore = new DataStore();
