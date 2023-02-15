import { Component } from '@angular/core';

@Component({
  selector: 'app-contenthub',
  templateUrl: './contenthub.component.html',
  styleUrls: ['./contenthub.component.css']
})



export class ContenthubComponent {
  tableData = [
    ["Sensii Vape Product Launch", "Press Release", "Matthew Pantell", "2023-02-13", "Draft"],
    ["How to Care for Your Vape", "Web Content", "Matthew Pantell", "2023-02-07", "Pending Review"],
    ["Finding Your Terpene", "Web Content", "Mihir Datta", "2023-02-06", "Pending Review"],
    ["Expanding to Arizona!", "Press Release", "Nick Janson", "2023-02-06", "Approved"],
    ["Sensii Vape - Paid Ad", "Paid Ad", "Mike Liu", "2023-02-05", "Approved"],
    ["FLOWERZ Dispensary Grand Opening", "Press Release", "Matthew Pantell", "2023-02-05", "Approved"],
    ["Sensii Vape Coming Soon!", "Web Content", "Nick Janson", "2023-02-05", "Active"],
  ]; 

  headers = [
    'Content Title', 'Content Type', 'Created By', 'Created Date', 'Status'
  ];

  lv = true;
}
