import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements OnInit {

  private currentURL: String;
  private currentTabPosition: number;
  constructor(private router: Router, private activateRoute: ActivatedRoute) {

    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        this.currentURL = event["url"];
        this.changeTab(this.currentURL.toString());
      }
    })
  }

  ngOnInit() {
  }

  tabChanged(event) {
    switch (event.index) {
      case 0:
        this.router.navigateByUrl('/container/about');
        break;
      case 1:
        this.router.navigateByUrl('/container/project');
        break;
      case 2:
        this.router.navigateByUrl('/container/blog');
        break;
      case 3:
        this.router.navigateByUrl('/container/contact');
        break;
      default:
        this.router.navigate(['about']);
    }
  }

  changeTab(url: string) {
    switch (url) {
      case '/container/about':
        this.currentTabPosition = 0;
        break;
      case '/container/project':
        this.currentTabPosition = 1;
        break;
      case '/container/blog':
        this.currentTabPosition = 2;
        break;
      case '/container/contact':
        this.currentTabPosition = 3;
        break;
      default:
        this.currentTabPosition = 0;
    }
  }

}
