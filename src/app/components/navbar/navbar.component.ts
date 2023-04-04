import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private routes: Router, private cookies: CookieService) { 
  }

  cerrarSession(){
    this.cookies.delete('session-countries');
    localStorage.clear();
    this.routes.navigateByUrl('/');
  }
}
