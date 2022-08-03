import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrCommonService } from '../../services/tr-common.service';

@Component({
  selector: 'app-tr-manage-products',
  templateUrl: './tr-manage-products.component.html',
  styleUrls: ['./tr-manage-products.component.scss'],
})
export class TrManageProductsComponent implements OnInit {
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
    // console.log(localStorage.getItem('username'));
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
  }
}
