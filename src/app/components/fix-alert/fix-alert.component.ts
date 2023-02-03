import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fix-alert',
  templateUrl: './fix-alert.component.html',
  styleUrls: ['./fix-alert.component.css']
})
export class FixAlertComponent implements OnInit {

  @Input() text = '';

  constructor() { }

  ngOnInit(): void {
  }

}
