import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product, Products, User,Userdata } from '../interfaces/tr-interface';

@Injectable({
  providedIn: 'root',
})
export class TrCommonService {
  private server = environment.server;
  // private jsonData ={
  //   id:1;
  //   attributes: {
  //     product_name: string;
  //     product_desc: string;
  //     product_price: number;
  //     product_quantity: number;
  //     product_display: boolean;
  //     product_image:{
  //         data:[
  //           {
  //             id:number;
  //             attributes:{
  //               alternativeText:string;
  //               url:string;
  //             }
  //           }
  //         ]
  //     }
  //   }
    
  // }

  constructor(private http: HttpClient) {}
  getAllproduct() {
    return this.http.get<Products>(
      this.server + '/api/apparelpages?populate=deep'
    );
  }

  getproductByID(id: number) {
    return this.http.get<{ data: Product }>(
      this.server + '/api/apparelpages/' + id + '?populate=deep'
    );
  }

  login(data: any) {
    return this.http.post<User>(
      this.server + '/api/auth/local',
      data
    );
  }

  register(data: any) {
    return this.http.post(this.server + '/api/auth/local/register', data);
  }

  getuserByID(id:any){
    return this.http.get<Userdata>(
      this.server + '/api/users/' + id,{
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
      }
    );
  }

  updateUser(id: any, data: any) {
    return this.http.put<User>(
      this.server + '/api/users/' + id,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
      }
    );
  }

  // For guard.ts
  isLoggedIn() {
    if (localStorage.getItem('jwt')) {
      return true;
    } else {
      return false;
    }
  }
}
