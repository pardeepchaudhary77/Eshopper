import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  constructor(private fireStore: AngularFireStorage, private fs: AngularFirestore) { }

  addNewImages(image: File){
    let ref = this.fireStore.ref('images/' + image.name + '_' + new Date().getTime())
    ref.put(image).then(() => {
      ref.getDownloadURL().subscribe(imgPath => {
        this.fs.collection('images').add({imgPath})
      })
    })
  }

  getPath(){
    return this.fs.collection('images').snapshotChanges()
  }
}
