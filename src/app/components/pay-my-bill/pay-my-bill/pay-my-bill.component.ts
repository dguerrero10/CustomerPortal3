import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared-services/navbar.service';

@Component({
  selector: 'app-pay-my-bill',
  templateUrl: './pay-my-bill.component.html',
  styleUrls: ['./pay-my-bill.component.scss']
})
export class PayMyBillComponent implements OnInit {
  public innerWidth: any;
  public matStretchTabs: boolean;

  constructor(public navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.show();

    this.innerWidth = window.innerWidth;
    this.matStretchTabs = this.innerWidth < 766 ? false : true;
  }
}
