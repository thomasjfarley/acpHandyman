import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'acp';
  menuItems: string[] = ['Homes', 'Services', 'Epoxy', 'Reviews', 'Our Work', 'Contact'];

  ngOnInit() {
    console.log(this.menuItems);
  }
}
