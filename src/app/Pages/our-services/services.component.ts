import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  maintenanceOptions: string[] = [
    'Drywall Repair',
    'Paint Touch Ups',
    'Deck Maintenance',
    'Toilet and Bathroom Repairs',
    'Small Electrical',
    'Sprinkler Repairs',
    'Door Repairs',
    'Faucet and Sink Repairs',
    'Leak Repairs',
    'Small Plumbing',
    'Concrete Sealing',
  ];

  handyManOptions: string[] = [
    'Drywall',
    'Interior Painting',
    'Exterior Painting',
    'Smart Home Installations',
    'TV Installations',
    'Wall Mounting',
    'Light Fixture and Fan Installation',
    'Fence Staining and Repair',
    'Door Installations',
    'FLoor Installations',
    'Epoxy Surfaces',
  ];

  remodelOptions: string[] = [
    'Bathroom Remodels',
    'Kitchen Remodels',
    'Basement Finishes',
    'Home Renovations',
    'Flooring Installations',
    'Countertop Installations',
    'Cabinet Installations',
    'Landscape Design',
    'Trim and Molding Installations',
    'Deck Rebuilds',
    'Interior Design',
  ];

  constructor() { }

  ngOnInit() {
  }

}
