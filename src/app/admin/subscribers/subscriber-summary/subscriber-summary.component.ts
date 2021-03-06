import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriber-summary',
  templateUrl: './subscriber-summary.component.html',
  styleUrls: ['./subscriber-summary.component.css']
})
export class SubscriberSummaryComponent implements OnInit {
  data: any[] = [
    { name: 'Hyatt', capacity: '25000', location: 'Hyderabad', contact: 'Neeraj', email: 'Neeraj@gmail.com', phone: '999-954-9520' },
    { name: 'Naren', capacity: '20000', location: 'Hyderabad', contact: 'Bincy', email: 'Bincy@gmail.com', phone: '999-954-9520' },
    { name: 'VKC', capacity: '15000', location: 'Hyderabad', contact: 'Aakash', email: 'Aakash@gmail.com', phone: '999-954-9520' },
    { name: 'Zinghaat', capacity: '25000', location: 'Hyderabad', contact: 'Chopra', email: 'Chopra@gmail.com', phone: '999-954-9520' }
  ];
  dataone: any[] = [
    { name: 'Hyatt', email: 'Neeraj@gmail.com', phone: '999-954-9520' },
    { name: 'Party', email: 'Girija@gmail.com', phone: '999-954-9520' },
    { name: 'N Convention', email: 'Samaya@gmail.com', phone: '999-954-9520' }
  ];
  datatwo: any[] = [
    { paidby: 'John', amount: '7000', paid: '7000', datetime: '20/10/2017 10.00AM' },
    { paidby: 'John', amount: '7000', paid: '7000', datetime: '12/01/2018 11.00AM' },
    { paidby: 'John', amount: '7000', paid: '7000', datetime: '02/01/2018 10.30PM' },
    { paidby: 'John', amount: '7000', paid: '7000', datetime: '20/10/2017 07.00AM' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
