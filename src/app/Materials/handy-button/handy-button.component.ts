import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'handy-button',
  templateUrl: './handy-button.component.html',
  styleUrls: ['./handy-button.component.css']
})
export class HandyButtonComponent implements OnInit {

  constructor() { }
  @Input() label: string;
  @Input() icon: string;

  ngOnInit() {
    // console.log(this.icon)
  }

}
