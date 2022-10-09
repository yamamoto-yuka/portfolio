import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrCommonService } from '../../services/tr-common.service';

@Component({
  selector: 'app-tr-account-products',
  templateUrl: './tr-account.component.html',
  styleUrls: ['./tr-account.component.scss'],
})
export class TrAccountComponent implements OnInit {
  username: any = '';
  email: any = '';
  updateStatus = false;
  showMessage = 'none';
  errorMessage: any = '';

  constructor(private cs: TrCommonService, private router: Router) {}

  update() {
    let id = localStorage.getItem('id');
    let Updatedata = {
      username: this.username,
      email: this.email,
    };
    this.cs.updateUser(id, Updatedata).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
      this.updateStatus = true;
      this.showMessage = 'block';
    });
  }

  signout() {
    localStorage.clear();
    this.router.navigate(['/trunkrecords/login']);
  }

  ngOnInit(): void {
    let id =  localStorage.getItem('id');
    this.cs.getuserByID(id).subscribe(data =>{
      console.log(data);
      this.username = data.username;
      this.email = data.email;
    })
  }
}
