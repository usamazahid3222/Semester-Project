import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  
  signinpage() {
    this.router.navigateByUrl('/login');
  }

  registerpage(){
    this.router.navigateByUrl('/register');
  }

}
