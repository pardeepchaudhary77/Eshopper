import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUser: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    this.auth.user?.subscribe(user => {
      if(user){
        this.isUser = true
        this.auth.userId = user.uid
      }
      else {
        this.isUser = false
        this.auth.userId = ''
      }
    })
  }

  logout(){
    this.auth.signout()
  }

}
