import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrCommonService } from '../../services/tr-common.service';

@Component({
  selector: 'app-tr-login',
  templateUrl: './tr-login.component.html',
  styleUrls: ['./tr-login.component.scss']
})
export class TrLoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  showMessage = 'none';
  loginStatus = true;
  errorMessage: any = '';

  constructor(private cs:TrCommonService, private router:Router) { }


  login(username:any, password:any){
    let loginData = {
      "identifier": this.username,
      "password": this.password
    }
    this.cs.login(loginData).subscribe(res =>{
      if(res.jwt){
        localStorage.setItem('jwt', res.jwt);
        localStorage.setItem('id', res.user.id);
        localStorage.setItem('email', res.user.email);
        localStorage.setItem('username', res.user.username);
        this.router.navigate(['/trunkrecords/account']);
        console.log(localStorage);
      }else{
        console.log('false');
        this.loginStatus = false;
        this.showMessage ='block';
      }
    })
  }

  ngOnInit(): void {
  }

}
