import { Component, OnInit, Inject } from '@angular/core';
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

  payBillBankFormControl: FormGroup;
  creditDebitBankFormControl: FormGroup;

  constructor(private _scrollToService: ScrollToService,
              public dialogRef: MatDialogRef<AutoPayEnrollComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: AutoBillingDialogData) {}

  config: ScrollToConfigOptions = {
    target: 'invalid-form'
  };

  ngOnInit() {
    this.createFormBankAccount();
    this.createFormCreditDebit();
  }

  paymentOptions: string[] = ['Credit/Debit Card', 'Bank Account']

  createFormBankAccount() {
    this.payBillBankFormControl = this.fb.group({
      bankName: ['', [Validators.required]],
      accountBankNum: ['', [Validators.required, Validators.pattern('[0-9]{0,10}')]],
      routingNum: ['', [Validators.required,
                        Validators.minLength(9),
                        Validators.maxLength(9),
                        Validators.pattern('[0-9]{0,10}')]]
    });
  }

  createFormCreditDebit() {
    this.creditDebitBankFormControl = this.fb.group({
      nameOnCard: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      CSV: ['', [Validators.required]]
    });
  }

  getErrorsBankAccount(el) {
    switch (el) {
      case 'bankName':
        if (this.payBillBankFormControl.get('bankName').hasError('required')) {
          return 'This field is required.'
        }
        break;
      case 'accountBankNum':
        if (this.payBillBankFormControl.get('accountBankNum').hasError('required')) {
          return 'This field is required.'
        }
        if (this.payBillBankFormControl.get('accountBankNum').hasError('pattern')) {
          return 'This field only accepts numbers.'
        }
        break;
      case 'routingNum':
        if (this.payBillBankFormControl.get('routingNum').hasError('required')) {
          return 'This field is required.'
        }
        if (this.payBillBankFormControl.get('routingNum').hasError('minlength')) {
          return 'This field must be 9 numbers long.'
        }
        if (this.payBillBankFormControl.get('routingNum').hasError('maxlength')) {
          return 'This field must be 9 numbers long.'
        }
        if (this.payBillBankFormControl.get('routingNum').hasError('pattern')) {
          return 'This field only accepts numnbers.'
        }
        break;
    }
  }
  getErrorsCreditDebit(el) {
    switch (el) {
      case 'nameOnCard':
        if (this.creditDebitBankFormControl.get('nameOnCard').hasError('required')) {
          return 'This field is required.'
        }
        break;
      case 'expirationDate':
        if (this.creditDebitBankFormControl.get('expirationDate').hasError('required')) {
          return 'This field is required.'
        }
        break;
      case 'cardNumber':
        if (this.creditDebitBankFormControl.get('cardNumber').hasError('required')) {
          return 'This field is required.'
        }
        break;
      case 'CSV':
        if (this.creditDebitBankFormControl.get('CSV').hasError('required')) {
          return 'This field is required.'
        }
        break;
      case 'signature':
        if (this.creditDebitBankFormControl.get('signature').hasError('required')) {
          return 'This field is required.'
        }
        break;
    }
  }

onNoClick(): void {
  this.dialogRef.close();
}

onSubmitBankAccount() {
  if (this.payBillBankFormControl.invalid) {
    this._scrollToService.scrollTo(this.config);
    return;
  }
  this.dialogRef.close();
  this.data.enrolledInAutoPay = true;
}

onSubmitCreditDebit() {
  if (this.creditDebitBankFormControl.invalid) {
    this._scrollToService.scrollTo(this.config);
    return;
  }
  this.dialogRef.close();
  this.data.enrolledInAutoPay = true;
}
}
