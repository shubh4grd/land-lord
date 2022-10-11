import { Component, OnInit } from '@angular/core';
import {SocialAuthService, SocialUser, GoogleLoginProvider} from 'angularx-social-login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: SocialUser;
  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {

    this.authService.authState.subscribe((user)=>{
      this.user = user;
    })
  }
  signUpGoogle(): any{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  };

  signOut(): any{
    this.authService.signOut();
  }

}
