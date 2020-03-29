import { Component, OnInit, Inject, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { OutageDialogData } from '../outages/outages.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { GoogleMapsService } from '../shared/google-maps.service';

interface Outage {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-report-outage-modal',
  templateUrl: './report-outage-modal.component.html',
  styleUrls: ['./report-outage-modal.component.scss']
})
export class ReportOutageModalComponent implements OnInit {
  public geoCoder;
  lat: number;
  lng: number;
  zoom: number;
  address: string;
  reportOutageFormControl: FormGroup;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  outageType: Outage[] = [
    {value: 'dirtyWater', viewValue: 'Dirty Water'},
    {value: 'lowWaterSpeed', viewValue: 'Low Water Speed'},
    {value: 'waterShutOff', viewValue: 'Water Shut Off'},
    {value: 'other', viewValue: 'Other'}
  ];

  constructor(private _snackbar: MatSnackBar,
              private fb: FormBuilder,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private mapService: GoogleMapsService,
              public dialogRef: MatDialogRef<ReportOutageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OutageDialogData) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.mapService.getCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
 
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 13;
        });
      });
    });
    this.createForm();
  }

  createForm() {
    this.reportOutageFormControl = this.fb.group({
      outageType: ['', [Validators.required]],
      outageLocation: ['', [Validators.required]],
      outageComment: ['', [Validators.required]]
    });
  }

  getErrors(el) {
    switch(el) {
      case 'outageType':
        if (this.reportOutageFormControl.get('outageType').hasError('required')) {
          return 'This field is required.'
        }
        break;
      case 'outageLocation':
        if (this.reportOutageFormControl.get('outageLocation').hasError('required')) {
          return 'This field is required.'
        }
      case 'outageComment':
        if (this.reportOutageFormControl.get('outageComment').hasError('required')) {
          return 'This field is required.'
        }
        break;
    }
  }

  onSubmit() {
    if (this.reportOutageFormControl.invalid) {
      return
    }
    this._snackbar.open('Your outage has been reported', 'Dismiss', {
      duration: 4000
    });
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
