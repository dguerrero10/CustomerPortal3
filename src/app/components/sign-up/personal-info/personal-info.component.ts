import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared-services/navbar.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  hide = true;
  checked = false;

  logoImg = '../../../../assets/images/My_Utilities.png';
  constructor(public navbarService: NavbarService,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.navbarService.hide();
  }

  createAccount() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 4000);
    this.router.navigate(['/home']);
  }
}
