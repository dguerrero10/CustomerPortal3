import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PhoneDialogData } from '../my-account.component';

@Component({
  selector: 'app-account-phone',
  templateUrl: './account-phone.component.html',
  styleUrls: ['./account-phone.component.scss']
})
export class AccountPhoneComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AccountPhoneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PhoneDialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
