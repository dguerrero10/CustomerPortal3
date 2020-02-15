import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PhotoDialogData } from '../my-account.component';

@Component({
  selector: 'app-account-photo',
  templateUrl: './account-photo.component.html',
  styleUrls: ['./account-photo.component.scss']
})
export class AccountPhotoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AccountPhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PhotoDialogData) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
