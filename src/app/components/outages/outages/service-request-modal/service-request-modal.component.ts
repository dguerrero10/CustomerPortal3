import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface ServiceRequest {
  value: string;
  viewValue: string;
}

interface ServiceRequestType {
  type: string;
  selected: boolean;
}

@Component({
  selector: 'app-service-request-modal',
  templateUrl: './service-request-modal.component.html',
  styleUrls: ['./service-request-modal.component.scss']
})
export class ServiceRequestModalComponent implements OnInit {
  serviceRequestFormControl: FormGroup;
  isLinear = false;

  constructor(public dialogRef: MatDialogRef<ServiceRequestModalComponent>,
              private fb: FormBuilder,
             ) { }

  serviceRequest: ServiceRequest[] = [
    {value: 'startService', viewValue: 'Start Service'},
    {value: 'stopService', viewValue: 'Stop Service'},
    {value: 'serviceInvestigation', viewValue: 'Service Investigation'},
    {value: 'accountInquiries', viewValue: 'Account Inquiries'}
  ];

  serviceRequestType: ServiceRequestType[] = [
    {type: 'startService', selected: false},
    {type: 'stopService', selected: false},
    {type: 'serviceInvestigation', selected: false},
    {type: 'accountInquiries', selected: false},
  ];

  // Initial Value
  public selected = this.serviceRequest[0].value;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.serviceRequestFormControl = this.fb.group({
      typeOfRequest: ['', [Validators.required]]
    });
  }

  getErrors(el) {
    switch(el) {
      case 'typeOfRequest':
        if (this.serviceRequestFormControl.get('typeOfRequest').hasError('required')) {
          return 'This field is required.'
        }
        break
    }
  }

  onSubmit(typeOfRequest) {
    if (this.serviceRequestFormControl.invalid) {
      return
    }
    else if (typeOfRequest === 'startService') {
      this.serviceRequestType.forEach((element) => {
        element.selected = false;
    });
      this.serviceRequestType[0].selected = true;
    }
    else if (typeOfRequest === 'stopService') {
      this.serviceRequestType.forEach((element) => {
        element.selected = false;
    });
      this.serviceRequestType[1].selected = true;
    }
    else if (typeOfRequest === 'serviceInvestigation') {
      this.serviceRequestType.forEach((element) => {
        element.selected = false;
    });
      this.serviceRequestType[2].selected = true;
    }
    else if (typeOfRequest === 'accountInquiries') {
      this.serviceRequestType.forEach((element) => {
        element.selected = false;
    });
      this.serviceRequestType[3].selected = true;
    }
    else return
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
