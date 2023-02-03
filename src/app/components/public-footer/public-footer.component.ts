import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-footer',
  templateUrl: './public-footer.component.html',
  styleUrls: ['./public-footer.component.css']
})
export class PublicFooterComponent implements OnInit {

  constructor() { }
  year: any;
  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}
