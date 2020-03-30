import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/components/sign-up/helpers/validators';

@Component({
  selector: 'app-account-password',
  templateUrl: './account-password.component.html',
  styleUrls: ['./account-password.component.scss']
})
export class AccountPasswordComponent implements OnInit {
  accountPasswordFormControl: FormGroup;

  constructor(private _snackbar: MatSnackBar,
              public dialogRef: MatDialogRef<AccountPasswordComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.accountPasswordFormControl = this.fb.group({
      previousPassword: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  getErrors(el) {
    switch (el) {
      case 'previousPassword':
        if (this.accountPasswordFormControl.get('previousPassword').hasError('required')) {
          return 'This field is required.';
        }
        break;
      case 'password':
        if (this.accountPasswordFormControl.get('password').hasError('required')) {
          return 'This field is required';
        }
        if (this.accountPasswordFormControl.get('password').hasError('minlength')) {
          return 'Password must be at least 8 characters.';
        }
        break;
      case 'confirmPassword':
        if (this.accountPasswordFormControl.get('confirmPassword').hasError('required')) {
          return 'This field is required.';
        }
        if (this.accountPasswordFormControl.get('confirmPassword').hasError('mustMatch')) {
          return 'Passwords must match.';
        }
        break;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onUpdate() {
    if (this.accountPasswordFormControl.invalid) {
      return;
    }
    this.dialogRef.close();
    this._snackbar.open('Your password has been updated', 'Dismiss', {
      duration: 4000
    });
  }
}
