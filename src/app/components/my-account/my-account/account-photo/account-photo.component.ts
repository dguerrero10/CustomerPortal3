import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-account-photo',
  templateUrl: './account-photo.component.html',
  styleUrls: ['./account-photo.component.scss']
})
export class AccountPhotoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AccountPhotoComponent>) { }

  ngOnInit() {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
