import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  accountMenu: string = '../assets/json/accountMenu.json';

  constructor(private _http: HttpClient){}
  
  getMenus(){
    return this._http.get(this.accountMenu)
  }

  //Category End
}
