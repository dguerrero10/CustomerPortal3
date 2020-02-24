import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExtensionDialogData } from '../pay.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-request-extension',
  templateUrl: './request-extension.component.html',
  styleUrls: ['./request-extension.component.scss']
})
export class RequestExtensionComponent implements OnInit {
  extensionFormControl: FormGroup;

  constructor(public dialogRef: MatDialogRef<RequestExtensionComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: ExtensionDialogData
              ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.extensionFormControl = this.fb.group({
      extensionRequest: ['', [Validators.required]]
    });
  }

  getError(el) {
    switch (el) {
      case 'extensionRequest':
        if (this.extensionFormControl.get('extensionRequest').hasError('required')) {
          return 'This field is required.';
        }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.extensionFormControl.invalid) {
        return;
    }
    this.onNoClick();
  }
}
