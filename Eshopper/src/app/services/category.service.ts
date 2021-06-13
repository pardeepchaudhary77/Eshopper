import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryId: any = null;

  constructor(private fs: AngularFirestore) { }

  //Category Start
  //Add Category
  categoryAdd(categoryName: string){
    return this.fs.collection('category').add({
      categoryName
    })
  }
  //Get Category
  categoryGet(){
    return this.fs.collection('category').snapshotChanges()
  }

  //Add sub-Category
  categorySubAdd(categoryid: string, subcategoryName: string, desc: string){
    return this.fs.collection(`category/${this.categoryId}/sub-category`).add({
      categoryid,
      subcategoryName,
      desc
    })
  }
  getSubCategories(){
    return this.fs.collection(`category/${this.categoryId}/sub-category`).snapshotChanges()
  }
}
