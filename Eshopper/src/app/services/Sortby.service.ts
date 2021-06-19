import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SortbyService {

  brandNameId: any
  categoryNameId: any
  constructor(private fs: AngularFirestore) { }

  //By Brand
  getProductByBrand(){
    return this.fs.collection(`products`, ref => ref.where('brandNameId', '==', this.brandNameId)).snapshotChanges()
  }
  getBrandById(id: any){
    return this.fs.doc(`brands/${id}`).valueChanges()
  }

  //By Category
  getProductByCategory(){
    return this.fs.collection(`products`, ref => ref.where('categoryNameId', '==', this.categoryNameId)).snapshotChanges()
  }
  //getCategoryById
  getCategoryById(id: any){
    return this.fs.doc(`slider/${id}`).valueChanges()
  }

 
}
