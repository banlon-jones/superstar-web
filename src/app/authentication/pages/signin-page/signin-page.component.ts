import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  getAuthState(state: boolean): void{
    if (state) {
      this.route.navigate(['/home']);
    }
  }

}
