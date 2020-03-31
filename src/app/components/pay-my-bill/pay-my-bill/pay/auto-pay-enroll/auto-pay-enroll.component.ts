import {Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AutoBillingDialogData } from '../pay.component';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auto-pay-enroll',
  templateUrl: './auto-pay-enroll.component.html',
  styleUrls: ['./auto-pay-enroll.component.scss']
})
export class AutoPayEnrollComponent implements OnInit {
  date = new Date();
  valid: boolean;
  paymentMethod: string;

  autoPayFormControl: FormGroup;

  constructor(private _scrollToService: ScrollToService,
              public dialogRef: MatDialogRef<AutoPayEnrollComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: AutoBillingDialogData) { }

  config: ScrollToConfigOptions = {
    target: 'invalid-form'
  };

  ngOnInit() {
    this.createForm();
  }

  paymentOptions: string[] = ['Debit/Credit Card', 'Bank Account']

  createForm() {
    this.autoPayFormControl = this.fb.group({
      bankName: ['', [Validators.required]],
      accountBankNum: ['', [Validators.required, Validators.pattern('[0-9]{0,10}')]],
      routingNum: ['', [Validators.required,
                        Validators.minLength(9),
                        Validators.maxLength(9),
                        Validators.pattern('[0-9]{0,10}')]],
      signature: ['', [Validators.required]]
    });
  }

  getErrors(el) {
    switch (el) {
      case 'bankName':
        if (this.autoPayFormControl.get('bankName').hasError('required')) {
          return 'This field is required.'
        }
        break;
      case 'accountBankNum':
        if (this.autoPayFormControl.get('accountBankNum').hasError('required')) {
          return 'This field is required.'
        }
        if (this.autoPayFormControl.get('accountBankNum').hasError('pattern')) {
          return 'This field only accepts numbers.'
        }
        break;
      case 'routingNum':
        if (this.autoPayFormControl.get('routingNum').hasError('required')) {
          return 'This field is required.'
        }
        if (this.autoPayFormControl.get('routingNum').hasError('minlength')) {
          return 'This field must be 9 numbers long.'
        }
        if (this.autoPayFormControl.get('routingNum').hasError('maxlength')) {
          return 'This field must be 9 numbers long.'
        }
        if (this.autoPayFormControl.get('routingNum').hasError('pattern')) {
          return 'This field only accepts numnbers.'
        }
        break;
      case 'signature':
        if (this.autoPayFormControl.get('signature').hasError('required')) {
          return 'This field is required.'
        }
        break;
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.autoPayFormControl.invalid) {
      this._scrollToService.scrollTo(this.config);
      return;
    }
    this.dialogRef.close();
    this.data.enrolledInAutoPay = true;
  }
}
