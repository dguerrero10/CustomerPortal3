import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavbarService } from '../../shared-services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  logoImg = '../../../../assets/images/My_Utilities.png';

  loginFormControl: FormGroup;

  constructor(public navbarService: NavbarService,
              private fb: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.navbarService.hide();
    this.createForm();
  }

  createForm() {
    this.loginFormControl = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  getErrors(el) {
    switch (el) {
      case 'email':
        if (this.loginFormControl.get('email').hasError('required')) {
          return 'Please provide your Email.';
        }
        if (this.loginFormControl.get('email').hasError('email')) {
          return 'Please provide a valid Email.';
        }
        break;
      case 'password':
        if (this.loginFormControl.get('password').hasError('required')) {
          return 'Please provide your Password.';
        }
        break;
    }
  }

onSubmit() {
  if (this.loginFormControl.invalid) {
    return;
  }
  this.router.navigate(['/home']);
  }
}
