import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  message = '';

  constructor(private router:Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.navigate(event);
      }
    });
  }
  
  navigate(event) {
    this.message = event.url;
  }
}
