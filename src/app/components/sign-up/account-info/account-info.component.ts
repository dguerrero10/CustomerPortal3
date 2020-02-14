import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared-services/navbar.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  hide = true;
  checked = false;

  logoImg = '../../../../assets/images/My_Utilities.png';
  constructor(public navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.hide();
  }

}
