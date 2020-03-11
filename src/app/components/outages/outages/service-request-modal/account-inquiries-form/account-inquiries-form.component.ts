import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { ServiceRequestModalComponent } from '../service-request-modal.component';

interface Inquiry {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-account-inquiries-form',
  templateUrl: './account-inquiries-form.component.html',
  styleUrls: ['./account-inquiries-form.component.scss']
})
export class AccountInquiriesFormComponent implements OnInit {

  accountInquiryFormControl: FormGroup;

  inquiries: Inquiry[] = [
    {value:'bill', viewValue: 'Bill'},
    {value: 'usage', viewValue: 'Usage'},
    {value: 'statements', viewValue: 'Statements'},
    {value: 'payments', viewValue: 'Payments'}
  ];
  
  constructor(public dialogRef: MatDialogRef<ServiceRequestModalComponent>,
              private fb: FormBuilder,
              private _snackbar: MatSnackBar,
              private _scrollToService: ScrollToService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.accountInquiryFormControl = this.fb.group({
      inquiryType: ['', [Validators.required]],
      scheduledDate: ['', [Validators.required]]
    });
  }

  getErrors(el) {
    switch(el) {
      case 'inquiryType':
        if (this.accountInquiryFormControl.get('inquiryType').hasError('required')) {
          return 'This field is required.'
        }
        break;
      case 'scheduledDate':
        if (this.accountInquiryFormControl.get('scheduledDate').hasError('required')) {
          return 'This field is required.'
        }
        break;
      }
    }

    config: ScrollToConfigOptions = {
      target: 'invalid-form'
    };
 
    onSubmit() {
      if (this.accountInquiryFormControl.invalid) {
          this._scrollToService.scrollTo(this.config);
          return
      }
      this.dialogRef.close();
      this._snackbar.open('Your service request has been submitted.', 'Dismiss', {
        duration: 4000
      });
    }
}
