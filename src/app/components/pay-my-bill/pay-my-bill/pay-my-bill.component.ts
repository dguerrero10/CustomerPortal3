import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared-services/navbar.service';

@Component({
  selector: 'app-pay-my-bill',
  templateUrl: './pay-my-bill.component.html',
  styleUrls: ['./pay-my-bill.component.scss']
})
export class PayMyBillComponent implements OnInit {
  constructor(public navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.show();
  }
}
