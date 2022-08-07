import { Component, OnInit, Renderer2 } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { About } from '../interfaces/interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  aboutItem:About;

  constructor(private cs: CommonService, private router:Router) {}


  ngOnInit(): void {
    // Scroll to Top 
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        window.scrollTo(0, 0);
      }
    })
    this.cs.getAboutdata().subscribe(res =>{
      console.log(res);
      this.aboutItem = res;
    })
  }
}
