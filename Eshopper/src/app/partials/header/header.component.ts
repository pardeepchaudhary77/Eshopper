import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUser: boolean = false;
  displayName: any

  constructor(private auth: AuthService, private accountService: AccountService) { }

  ngOnInit(): void {

    this.auth.user?.subscribe(user => {
      if(user){
        this.isUser = true
        this.auth.userId = user.uid

        localStorage.setItem('user', JSON.stringify(this.displayName));
      }
      else {
        this.isUser = false
        this.auth.userId = ''

        localStorage.setItem('user', '');
      }
    })

    //get user display name
    //this.accountService.getDisplayName().subscribe(data => this.displayName = data)
  }

  logout(){
    this.auth.logout()
    localStorage.removeItem('user')
  }

}
