import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  show: boolean;
  constructor() { }

  ngOnInit() {
  }

  userReg(){
    this.show = true;
  }
  storeReg(){this.show = false;}

}
