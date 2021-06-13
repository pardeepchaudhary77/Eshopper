import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private fs: AngularFirestore, private auth: AuthService) { }

  addUser(id: any, name: string){
    return this.fs.doc('users/' +id).set({
        name
      })
  }

  //get display name
  getDisplayName(){
    return this.fs.doc(`users/${this.auth.userId}`).valueChanges()
  }
}
