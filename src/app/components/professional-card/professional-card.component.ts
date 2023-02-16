import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-card',
  templateUrl: './professional-card.component.html',
  styleUrls: ['./professional-card.component.css']
})
export class ProfessionalCardComponent implements OnInit {
  user: any;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') as string);

  }

}
