import {Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaperlessBillingDialogData } from '../pay.component';

@Component({
  selector: 'app-paperless-billing-enroll',
  templateUrl: './paperless-billing-enroll.component.html',
  styleUrls: ['./paperless-billing-enroll.component.scss']
})
export class PaperlessBillingEnrollComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PaperlessBillingEnrollComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PaperlessBillingDialogData) { }

  ngOnInit() {
  }

  onAgree() {
    this.data.enrolledInPaperless = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
