import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, Form } from '@angular/forms';
import { NavbarService } from '../../shared-services/navbar.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  logoImg = '../../../../assets/images/My_Utilities.png';

  personalInfoFormControl: FormGroup;

  constructor(public navbarService: NavbarService,
              private fb: FormBuilder,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.navbarService.hide();
    this.createForm();
  }

  createForm() {
    this.personalInfoFormControl = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNum: ['', [Validators.required,
                      Validators.minLength(10),
                      Validators.maxLength(10),
                      Validators.pattern('[0-9]{0,10}')
                ]]
    });
  }

  getErrors(el) {
    switch (el) {
      case 'firstName':
        if (this.personalInfoFormControl.get('firstName').hasError('required')) {
          return 'This field is required';
        }
        break;
      case 'lastName':
        if (this.personalInfoFormControl.get('lastName').hasError('required')) {
        return 'This field is required';
        }
        break;
      case 'address':
        if (this.personalInfoFormControl.get('address').hasError('required')) {
        return 'This field is required';
        }
        break;
      case 'phoneNum':
        if (this.personalInfoFormControl.get('phoneNum').hasError('required')) {
        return 'This field is required';
        }
        if (this.personalInfoFormControl.get('phoneNum').hasError('pattern')) {
          return 'Only numbers are allowed.';
        }
        if (this.personalInfoFormControl.get('phoneNum').hasError('minlength')) {
          return 'Phone Number must be 10 numbers long.';
        }
        if (this.personalInfoFormControl.get('phoneNum').hasError('maxlength')) {
          return 'Phone Number must be 10 numbers long.';
        }
        break;
    }
  }

  createAccount() {
    if (this.personalInfoFormControl.invalid) {
      return;
    }
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 4000);
    this.router.navigate(['/home']);
  }
}
