import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],

})
export class WeatherDetailsComponent implements OnInit {
  countryName: string = '';
  weatherData: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.countryName = params['country'];
      this.fetchWeatherData(this.countryName);
    });
  }

  fetchWeatherData(country: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=794ee95e63c5a32aaf88cd813fa2e425`;
    this.http.get<any>(url).subscribe((data) => {
      this.weatherData = data;
    });
  }
}
