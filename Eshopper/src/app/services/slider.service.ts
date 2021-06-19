import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private fs: AngularFirestore) { }

  
  slider(sliderName: string,
        cattext: string,
        categoryName: string,
        desc: string,
        image: string){
    return this.fs.collection('slider').add({
      sliderName,
      categoryName: cattext,
      categoryNameId: categoryName,
      desc,
      image
    })
  }

  sliderData(){
    return this.fs.collection('slider').snapshotChanges()
  }
}
