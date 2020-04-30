import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'acp';
  menuItems: string[] = ['Home', 'Services', 'Epoxy', 'Reviews', 'Our Work', 'Contact'];
  page = 'Home';

  ngOnInit() {
    console.log(this.menuItems);
  }
}
