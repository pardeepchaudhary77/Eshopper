import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.default.User | null> | undefined
  userId: any = null;
  userEmail: any = null;

  constructor(private auth: AngularFireAuth) {
    this.user = this.auth.user
   }

  signup(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password)
  }
  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout(){
    return this.auth.signOut()
  }
}
