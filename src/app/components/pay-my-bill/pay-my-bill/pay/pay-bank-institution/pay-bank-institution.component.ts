import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AutoBillingDialogData } from '../pay.component';
import { AutoPayEnrollComponent } from '../auto-pay-enroll/auto-pay-enroll.component';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-pay-bank-institution',
  templateUrl: './pay-bank-institution.component.html',
  styleUrls: ['./pay-bank-institution.component.scss']
})
export class PayBankInstitutionComponent implements OnInit {
  date = new Date();
  valid: boolean;
  payBillBankFormControl: FormGroup;

  constructor(private fb: FormBuilder,
              private _scrollToService: ScrollToService,
              public dialogRef: MatDialogRef<AutoPayEnrollComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AutoBillingDialogData
             ) { }

  ngOnInit(): void {
    this.createFormBankInstituition();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  config: ScrollToConfigOptions = {
    target: 'invalid-form'
  };

  createFormBankInstituition() {
    this.payBillBankFormControl = this.fb.group({
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
      case 'signature':
        if (this.payBillBankFormControl.get('signature').hasError('required')) {
          return 'This field is required.'
        }
    }
  }

  onSubmit() {
    if (this.payBillBankFormControl.invalid) {
      this._scrollToService.scrollTo(this.config);
      return;
    }
    this.dialogRef.close();
    this.data.enrolledInAutoPay = true;
  }

}
