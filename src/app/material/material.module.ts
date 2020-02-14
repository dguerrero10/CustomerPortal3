import { NgModule } from '@angular/core';
import { MatToolbarModule,
         MatTabsModule,
         MatGridListModule,
         MatButtonModule,
         MatIconModule,
         MatCardModule,
         MatExpansionModule,
         MatSidenavModule,
         MatSelectModule,
         MatFormFieldModule,
         MatInputModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatSnackBarModule,
         MatTreeModule,
         MatListModule,
         MatButtonToggleModule,
         MatMenuModule,
         MatProgressBarModule,
         MatCheckboxModule,
         MatDialogModule
        } from '@angular/material';

import { MatBadgeModule } from '@angular/material/badge';

const MaterialComponents = [
  MatToolbarModule,
  MatTabsModule,
  MatGridListModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatExpansionModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatTreeModule,
  MatListModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatDialogModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
