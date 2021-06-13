import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fs: AngularFirestore) { }

  addNewProduct(productName: string, 
                categoryName: string, 
                subcategoryName: string, 
                brandName: string, 
                price: number,
                discountPrice: number,
                dialog: string,
                singleImg: string){
    return this.fs.collection('products').add(
      {
        productName, categoryName, subcategoryName, brandName, price, discountPrice, dialog, singleImg
      }
    )
  }
}
