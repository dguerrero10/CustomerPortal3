import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-pay-enroll',
  templateUrl: './auto-pay-enroll.component.html',
  styleUrls: ['./auto-pay-enroll.component.scss']
})
export class AutoPayEnrollComponent implements OnInit {
  paymentMethod: string;

  paymentOptions: string[] = ['Credit/Debit Card', 'Bank Account']

  constructor() {}

  ngOnInit() {
  } 
}
