import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  errorMsg: string = '' 
  errorMsg2: string = ''

  constructor(private fb: FormBuilder, 
              private authService: AuthService,
              private accountService: AccountService, 
              private router: Router) { }

  form = this.fb.group({
    name: ['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(3)]]
  })

  formLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  signup(form: any){
    this.authService.signup(form.value.email, form.value.password)
      .then(data => {
        this.accountService.addUser(data.user?.uid, form.value.name) 
        this.errorMsg = '',
        this.router.navigate(['/'])
      }).catch(err => this.errorMsg = err)
  }

  signin(formLogin: any){
    this.authService.login(formLogin.value.email, formLogin.value.password)
      .then(data => {
        this.errorMsg2 = '',
        this.router.navigate(['/'])
      }).catch(err => this.errorMsg2 = err)
  }

}
