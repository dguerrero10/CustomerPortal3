import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { ServiceRequestModalComponent } from '../service-request-modal.component';

interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-start-service-form',
  templateUrl: './start-service-form.component.html',
  styleUrls: ['./start-service-form.component.scss']
})
export class StartServiceFormComponent implements OnInit {

  startServiceFormControl: FormGroup;

  services: Service[] = [
    {value: 'water', viewValue: 'Water'}
  ];

  constructor(public dialogRef: MatDialogRef<ServiceRequestModalComponent>,
              private fb: FormBuilder,
              private _scrollToService: ScrollToService,
              private _snackbar: MatSnackBar
             ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.startServiceFormControl = this.fb.group({
      scheduledDate: ['', [Validators.required]],
      serviceType: ['', [Validators.required]]
    });
  }

  getErrors(el) {
    switch(el) {
      case 'scheduledDate':
        if (this.startServiceFormControl.get('scheduledDate').hasError('required')) {
          return 'This field is required.'
        }
        break;
      case 'serviceType':
        if (this.startServiceFormControl.get('serviceType').hasError('required')) {
          return 'This field is required.'
        }
        break;
    }
  }

  config: ScrollToConfigOptions = {
    target: 'invalid-form'
  };

  onSubmit() {
    if (this.startServiceFormControl.invalid) {
      this._scrollToService.scrollTo(this.config);    
      return
    }
    this.dialogRef.close();
    this._snackbar.open('Your service request has been submitted.', 'Dismiss', {
      duration: 4000
    });
  }
}
