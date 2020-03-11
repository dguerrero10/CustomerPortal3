import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { ServiceRequestModalComponent } from '../service-request-modal.component';

interface Investigation {
  value: string;
  viewValue: string;
}

interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-service-investigation-form',
  templateUrl: './service-investigation-form.component.html',
  styleUrls: ['./service-investigation-form.component.scss']
})
export class ServiceInvestigationFormComponent implements OnInit {

  serviceInvestigationFormControl: FormGroup;

  typeOfInvestigations: Investigation[] = [
    {value: 'highBill', viewValue: 'High Bill'},
    {value: 'pressureNonEmergency', viewValue: 'Pressure Non-Emergency'},
    {value: 'pressureEmergency', viewValue: 'Pressure Emergency'},
    {value: 'qualityNonEmergency', viewValue: 'Quality Non-Emergency'},
    {value: 'qualityEmergency', viewValue: 'Quality Emergency'},
    {value: 'leakNonEmergency', viewValue: 'Leak Non-Emergency'},
    {value: 'leakEmergency', viewValue: 'Leak Emergency'},
    {value: 'waterWaste', viewValue: 'Water Waste'}
  ];

  services: Service[] = [
    {value: 'water', viewValue:'Water'}
  ];

  constructor(public dialogRef: MatDialogRef<ServiceRequestModalComponent>,
              private fb: FormBuilder,
              private _scrollToService: ScrollToService,
              private _snackbar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.serviceInvestigationFormControl = this.fb.group({
      investigationType: ['', [Validators.required]],
      serviceType: ['', [Validators.required]]
    });
  }

  getErrors(el) {
    switch(el) {
      case 'investigationType':
        if (this.serviceInvestigationFormControl.get('investigationType').hasError('required')) {
          return 'This field is required.'
        }
        break;
      case 'serviceType':
        if (this.serviceInvestigationFormControl.get('serviceType').hasError('required')) {
          return 'This field is required.'
        }
        break;
    }
  }

  config: ScrollToConfigOptions = {
    target: 'invalid-form'
  };

  onSubmit() {
    if (this.serviceInvestigationFormControl.invalid) {
      this._scrollToService.scrollTo(this.config);
      return
    }
    this.dialogRef.close();
    this._snackbar.open('Your service request has been submitted.', 'Dismiss', {
      duration: 4000
    });
  }
}
