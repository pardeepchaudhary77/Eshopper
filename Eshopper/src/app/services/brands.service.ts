import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private fs: AngularFirestore) { }

  addNewBrands(brandName: string){
    return this.fs.collection('brands').add({brandName})
  }

  getBrands(){
    return this.fs.collection('brands').snapshotChanges()
  }

}
