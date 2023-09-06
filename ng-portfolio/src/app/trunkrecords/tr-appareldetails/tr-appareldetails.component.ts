import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrCommonService } from '../services/tr-common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tr-appareldetails',
  templateUrl: './tr-appareldetails.component.html',
  styleUrls: ['./tr-appareldetails.component.scss']
})
export class TrAppareldetailsComponent implements OnInit {
  product: any;

  products: any[] = [
    {
      id:1,
      attributes: {
        product_name: 'TRUNK RECORD LOGO SWEAT',
        product_desc: 'Ships within one week.The TRUNK RECORD logo is simply printed on a gray sweatshirt.',
        product_price: 30.55,
        product_quantity: 12,
        product_display: true,
        product_image:{
            data:[
              {
                id:1,
                attributes:{
                  alternativeText:'TRUNK RECORD LOGO SWEAT',
                  url:'https://drive.google.com/uc?export=view&id=11JxdLWotcwsdK_PV2mbdWnvBq2fpHeD4'
                }
              },
              {
                id:2,
                attributes:{
                  alternativeText:'TRUNK RECORD LOGO SWEAT',
                  url:'https://drive.google.com/uc?export=view&id=16ki_BU66TBjyxcN84gknu6czEz1k7KX6'
                }
              }
            ]
        }
      }
    },
    {
      id:2,
      attributes: {
        product_name: 'TRUNK RECORD LOGO CAP',
        product_desc: 'The colorful Trunk Records logo is printed on the cap. Take a trip with the cap!',
        product_price: 25.55,
        product_quantity: 10,
        product_display: true,
        product_image:{
            data:[
              {
                id:1,
                attributes:{
                  alternativeText:'TRUNK RECORD LOGO CAP',
                  url:'https://drive.google.com/uc?export=view&id=1YmOQI0SVB1DWCn3WtOpt6f-3JEcFSxHZ'
                }
              },
              {
                id:2,
                attributes:{
                  alternativeText:'TRUNK RECORD LOGO CAP',
                  url:'https://drive.google.com/uc?export=view&id=1UjdA-2f4FFvglUcqczir_DWEDFh5BGTn'
                }
              }
            ]
        }
      }
    },
    {
      id:3,
      attributes: {
        product_name: 'TRUNK RECORD LOGO STICKER',
        product_desc: 'This is the popular original logo sticker. Why not add some color to your usual items with this sticker? Please wait a little longer for resale.',
        product_price:  8.55,
        product_quantity: 3,
        product_display: true,
        product_image:{
            data:[
              {
                id:1,
                attributes:{
                  alternativeText:'TRUNK RECORD LOGO STICKER',
                  url:'https://drive.google.com/uc?export=view&id=1ZHm93lo2zXaGssJ__CN5kEgUGO_K5Ujc'
                }
              },
              {
                id:2,
                attributes:{
                  alternativeText:'TRUNK RECORD LOGO STICKER',
                  url:'https://drive.google.com/uc?export=view&id=1Fct5XH0Jy3J06pH2Xz4xGcAVrBUVTiO6'
                }
              }
            ]
        }
      }
    },

  ]

  
  // server = environment.server;
  constructor(private cs:TrCommonService, private param:ActivatedRoute) { }

  availability(data: any) {
    if (data > 0) return true;
    else return false;
  }

  ngOnInit(): void {
    let id: any = this.param.snapshot.paramMap.get('id');
    console.log(id);
    let product:any = this.products.find(products => products.id === parseInt(id));
    console.log(product);
    this.product = product;


    // When using API from strapi
    // this.cs.getproductByID(id).subscribe((res) => {
    //   this.product = res.data;
    //   console.log(res.data);
    // });
  }
  

}
