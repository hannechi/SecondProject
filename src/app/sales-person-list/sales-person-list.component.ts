import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit{
  // x = new SalesPerson("sara","hedfi","sarahedfi@gmail.com",5000);
  // y= new SalesPerson("chiheb","hannechi","sarahedfi@gmail.com",5000);
  name ="sarra";
  listsalesPersons : SalesPerson[]=[
    new SalesPerson("sara","hedfi","sarahedfi@gmail.com",5000),
    new SalesPerson("chiheb","hannechi","chihebhannechi@gmail.com",6000),
    new SalesPerson("ibtissem","ben younes","ibtissem@gmail.com",7000),
    new SalesPerson("maned","yahya","maned@gmail.com",6055),
    new SalesPerson("Salma","ben younes","Salma@gmail.com",7050),
    new SalesPerson("amine","amine","amine@gmail.com",55150),
  ];
  ngOnInit(): void {
  }


}
