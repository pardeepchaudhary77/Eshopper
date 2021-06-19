import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  productId: any

  constructor(private fs: AngularFirestore) { }

  addNewProduct(productName: string, 
                cattext: string, 
                categoryName: string,
                subcattext: string, 
                subcategoryName: string,
                brandtext: string,
                brandName: string,
                price: number,
                discountPrice: number,
                dialog: string,
                singleImg: string){
    return this.fs.collection('products').add(
      {
        productName, 
        categoryName: cattext, 
        categoryNameId:categoryName,
        subcategoryName: subcattext, 
        subcategoryNameId: subcategoryName,
        brandName: brandtext,
        brandNameId: brandName,
        price, 
        discountPrice, 
        dialog, 
        singleImg
      }
    )
  }

  getAllData(){
    return this.fs.collection('products').snapshotChanges()
  }

  //getSingleProduct
  singleProduct(id: any){
    return this.fs.doc('products/'+id).valueChanges()
  }

  //getMultipleImages
  getMultipleImages(imgPath: any, isChecked: boolean){
    return this.fs.collection(`products/${this.productId}/collections`).add({imgPath, isChecked})
  }

  getImages(){
    return this.fs.collection(`products/${this.productId}/collections`).snapshotChanges()
  }
  
}
