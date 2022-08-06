import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  numero()
  {
    return localStorage.length
  }

  public clearData() {
    localStorage.clear();
  }

  getAll()
  {
    return localStorage;
  }
}
