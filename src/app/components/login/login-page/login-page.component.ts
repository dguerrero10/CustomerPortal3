import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared-services/navbar.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  checked = false;

  logoImg = '../../../../assets/images/My_Utilities.png';

  constructor(public navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.hide();
  }

}
