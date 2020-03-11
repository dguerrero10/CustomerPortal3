import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-phone',
  templateUrl: './account-phone.component.html',
  styleUrls: ['./account-phone.component.scss']
})
export class AccountPhoneComponent implements OnInit {
  accountPhoneFormControl: FormGroup;

  constructor(private _snackbar: MatSnackBar,
              public dialogRef: MatDialogRef<AccountPhoneComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.accountPhoneFormControl = this.fb.group({
      phoneNum: ['', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('[0-9]{0,10}')
      ]]
    });
  }

  getErrors(el) {
    switch (el) {
      case 'phoneNum':
        if (this.accountPhoneFormControl.get('phoneNum').hasError('required')) {
          return 'This field is required.';
        }
        if (this.accountPhoneFormControl.get('phoneNum').hasError('minlength')) {
          return 'Phone Number must be 10 numbers long.';
        }
        if (this.accountPhoneFormControl.get('phoneNum').hasError('maxlength')) {
          return 'Phone Number must be 10 numbers long.';
        }
        if (this.accountPhoneFormControl.get('phoneNum').hasError('pattern')) {
          return 'Only numbers are allowed.';
        }
        break;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onUpdate() {
    if (this.accountPhoneFormControl.invalid) {
      return;
    }
    this.dialogRef.close();
    this._snackbar.open('Your phone number has been updated.', 'Dismiss', {
      duration: 4000
    }); 
  }

}
