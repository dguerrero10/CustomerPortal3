import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared-services/navbar.service';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {

  constructor(public navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.show();
  }

}
