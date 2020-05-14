import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-auto-pay-enroll',
  templateUrl: './auto-pay-enroll.component.html',
  styleUrls: ['./auto-pay-enroll.component.scss']
})
export class AutoPayEnrollComponent implements OnInit {
  paymentMethod: string;

  paymentOptions: string[] = ['Credit/Debit Card', 'Bank Account']

  constructor(
              private _scrollToService: ScrollToService,
              public dialogRef: MatDialogRef<AutoPayEnrollComponent>
             ) {}

  ngOnInit() {
  }

  config: ScrollToConfigOptions = {
    target: 'smoothScrollTarget'
  };

  smoothScroll() {
    this._scrollToService.scrollTo(this.config);
  }

  Cancel() {
    this.dialogRef.close();
  }
}
