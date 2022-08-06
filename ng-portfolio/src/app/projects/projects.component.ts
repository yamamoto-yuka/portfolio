import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Project } from '../interfaces/interface';
import { CommonService } from '../services/common.service';
import { NavigationEnd, Router } from '@angular/router';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private cs: CommonService, private router: Router) {}

  // GSAP Animation
  scrollTgr() {

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.defaults({
        markers: false,
      });

      let points = gsap.utils.toArray('.point');
      console.log(points);
      let indicators: any = gsap.utils.toArray('.indicator');

      let height = 100 * points.length;
      console.log(points.length);

      gsap.set('.indicators', { display: 'flex' });

      let tl = gsap.timeline({
        duration: points.length,
        scrollTrigger: {
          trigger: '.projectsSection',
          start: 'top center',
          end: '+=' + height + '%',
          scrub: 2,
          id: 'points',
        },
      });

      let pinner = gsap.timeline({
        scrollTrigger: {
          trigger: '.projectsSection .wrapper',
          start: 'top top',
          end: '+=' + height + '%',
          scrub: true,
          pin: '.projectsSection .wrapper',
          pinSpacing: true,
          id: 'pinning',
        },
      });

      points.forEach((elem: any, i) => {
        console.log(elem);
        gsap.set(elem, { position: 'absolute', top: 0 });
        tl.to(indicators[i], { backgroundColor: '#917C46', duration: 0.3 }, i);
        tl.from(elem.querySelector('img'), { autoAlpha: 0 }, i);
        tl.from(
          elem.querySelector('article'),
          { autoAlpha: 0, translateY: 100 },
          i
        );
        if (i != points.length - 1) {
          tl.to(
            indicators[i],
            { backgroundColor: '#b59b59', duration: 0.3 },
            i + 0.75
          );
          tl.to(elem.querySelector('article'), { autoAlpha: 0 }, i + 0.75);
        }
      });
  }

  ngOnInit(): void {
    // Scroll to Top
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    // this.cs.getProjects().subscribe((res) => {
    //   this.projects = res.data;
    //   console.log(this.projects);
    // });
    gsap.registerPlugin(ScrollTrigger);
    this.scrollTgr();
    
  }
}
