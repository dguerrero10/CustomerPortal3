import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/components/sign-up/helpers/validators';

@Component({
  selector: 'app-account-password',
  templateUrl: './account-password.component.html',
  styleUrls: ['./account-password.component.scss']
})
export class AccountPasswordComponent implements OnInit {
  accountPasswordFormControl: FormGroup;

  constructor(public dialogRef: MatDialogRef<AccountPasswordComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.accountPasswordFormControl = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  getErrors(el) {
    switch (el) {
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
  }
}
