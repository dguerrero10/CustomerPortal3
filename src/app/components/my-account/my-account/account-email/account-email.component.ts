import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmailDialogData } from '../my-account.component';

@Component({
  selector: 'app-account-email',
  templateUrl: './account-email.component.html',
  styleUrls: ['./account-email.component.scss']
})
export class AccountEmailComponent implements OnInit {
  message = 'Your email has been updated!';

  constructor(public dialogRef: MatDialogRef<AccountEmailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: EmailDialogData,
              ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
