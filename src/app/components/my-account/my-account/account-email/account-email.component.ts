import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-account-email',
  templateUrl: './account-email.component.html',
  styleUrls: ['./account-email.component.scss']
})
export class AccountEmailComponent implements OnInit {
  accountEmailFormControl: FormGroup;

  constructor(private _snackbar: MatSnackBar,
              public dialogRef: MatDialogRef<AccountEmailComponent>,
              private fb: FormBuilder
              ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.accountEmailFormControl = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  getErrors(el) {
    switch (el) {
      case 'email':
      if (this.accountEmailFormControl.get('email').hasError('required')) {
        return 'This field is required.';
      }
      if (this.accountEmailFormControl.get('email').hasError('email')) {
        return 'Please provide a valid Email.';
      }
      break;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onUpdate() {
    if (this.accountEmailFormControl.invalid) {
      return;
    }
    this.dialogRef.close();
    this._snackbar.open('Your email has been updated.', 'Dismiss', {
      duration: 4000
    });
  }

}
