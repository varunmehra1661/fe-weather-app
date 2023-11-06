import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: any[] = [];
  countryControl = new FormControl();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchCountryData();
  }

  fetchCountryData() {
    const url = 'https://countriesnow.space/api/v0.1/countries';
    this.http.get<any>(url).subscribe((data) => {
      this.countries = data.data;
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.country === c2.country : c1 === c2;
  }

  onViewWeather() {
    if (this.countryControl.value) {
      const countryName = this.countryControl.value.country;
      this.router.navigate(['/weather-details', countryName]);
    }
  }
}
