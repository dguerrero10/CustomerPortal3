import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavbarService } from '../../shared-services/navbar.service';
import { Router } from '@angular/router';
import { MustMatch } from '../helpers/validators';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  logoImg = '../../../../assets/images/My_Utilities.png';

  accountInfoFormControl: FormGroup;

  constructor(public navbarService: NavbarService,
              private router: Router,
              private fb: FormBuilder ) { }

  ngOnInit() {
    this.navbarService.hide();
    this.createForm();
  }

  createForm() {
    this.accountInfoFormControl = this.fb.group({
      accountNum: ['', [Validators.required,
                        Validators.minLength(16),
                        Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email]],
      createPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      }, {
      validator: MustMatch('createPassword', 'confirmPassword')
    });
  }

  getErrors(el) {
    switch (el) {
      case 'accountNum':
        if (this.accountInfoFormControl.get('accountNum').hasError('required')) {
          return 'This field is required.';
        }
        if (this.accountInfoFormControl.get('accountNum').hasError('minlength')) {
          return 'Account Number must be 16 characters long.';
        }
        if (this.accountInfoFormControl.get('accountNum').hasError('maxlength')) {
          return 'Account Number must be 16 characters long';
        }
        break;
      case 'email':
        if (this.accountInfoFormControl.get('email').hasError('required')) {
          return 'This field is required.';
        }
        if (this.accountInfoFormControl.get('email').hasError('email')) {
          return 'Please provide a valid Email.';
        }
        break;
      case 'createPassword':
        if (this.accountInfoFormControl.get('createPassword').hasError('required')) {
          return 'This field is required.';
        }
        if (this.accountInfoFormControl.get('createPassword').hasError('minlength')) {
          return 'Password must be at least 8 characters long.';
        }
        break;
      case 'confirmPassword':
        if (this.accountInfoFormControl.get('confirmPassword').hasError('required')) {
          return 'This field is required.';
        }
        if (this.accountInfoFormControl.get('confirmPassword').hasError('mustMatch')) {
          return 'Passwords must match.';
        }
        break;
      }
    }

  onSubmit() {
    if (this.accountInfoFormControl.invalid) {
      return;
    }
    this.router.navigate(['sign-up/personal-info']);
  }
}
